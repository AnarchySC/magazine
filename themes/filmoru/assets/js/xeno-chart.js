/* Xenolinguistics Interactive Chart — Cassette Future Magazine
   Vanilla Canvas 2D scatter plot with 7 weight sliders, preset buttons,
   and full tooltip. Points move on X-axis as weights change. */

(function () {
  'use strict';

  var data = window.__xenoData;
  if (!data || !data.length) return;

  var canvas = document.getElementById('xeno-canvas');
  var tooltip = document.getElementById('xeno-tooltip');
  var ySelect = document.getElementById('xeno-y-axis');
  if (!canvas || !ySelect) return;

  var ctx = canvas.getContext('2d');
  var dpr = window.devicePixelRatio || 1;
  var PAD = { top: 30, right: 140, bottom: 50, left: 60 };
  var POINT_SIZE = 5;
  var ASPECT = 16 / 9;

  // Slider config: id → { slider, valSpan, dataKey }
  var WEIGHT_DEFS = [
    { id: 'xeno-w-freedom',  valId: 'xeno-w-freedom-val',  key: 'freedom_score',  label: 'Freedom' },
    { id: 'xeno-w-rd',       valId: 'xeno-w-rd-val',       key: 'rd_pct',         label: 'R&D' },
    { id: 'xeno-w-edu',      valId: 'xeno-w-edu-val',      key: 'education',      label: 'Education' },
    { id: 'xeno-w-trust',    valId: 'xeno-w-trust-val',    key: 'social_trust',   label: 'Trust' },
    { id: 'xeno-w-trade',    valId: 'xeno-w-trade-val',    key: 'trade_openness', label: 'Trade' },
    { id: 'xeno-w-econ',     valId: 'xeno-w-econ-val',     key: 'econ_freedom',   label: 'Econ Free.' },
    { id: 'xeno-w-speech',   valId: 'xeno-w-speech-val',   key: 'bits_per_sec',   label: 'Speech' },
  ];

  var weights = [];
  for (var w = 0; w < WEIGHT_DEFS.length; w++) {
    var def = WEIGHT_DEFS[w];
    var slider = document.getElementById(def.id);
    var valSpan = document.getElementById(def.valId);
    if (!slider) continue;
    weights.push({ slider: slider, valSpan: valSpan, key: def.key, label: def.label });
    slider.addEventListener('input', function (s, v) {
      return function () { v.textContent = s.value; draw(); };
    }(slider, valSpan));
  }

  // Preset buttons
  var presets = {
    'xeno-preset-freedom': function () { setWeights([100, 0, 0, 0, 0, 0, 0]); },
    'xeno-preset-speech':  function () { setWeights([0, 0, 0, 0, 0, 0, 100]); },
    'xeno-preset-all':     function () { setWeights([100, 100, 100, 100, 100, 100, 100]); },
  };
  Object.keys(presets).forEach(function (id) {
    var btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', presets[id]);
  });

  function setWeights(vals) {
    for (var i = 0; i < weights.length && i < vals.length; i++) {
      weights[i].slider.value = vals[i];
      weights[i].valSpan.textContent = vals[i];
    }
    draw();
  }

  function getColors() {
    var s = getComputedStyle(document.documentElement);
    return {
      bg: s.getPropertyValue('--surface').trim() || '#f5f5f5',
      text: s.getPropertyValue('--text').trim() || '#1a1a1a',
      textLight: s.getPropertyValue('--text-light').trim() || '#666',
      border: s.getPropertyValue('--border').trim() || '#e0e0e0',
      blue: s.getPropertyValue('--cassette-blue').trim() || '#1B3A5F',
      orange: s.getPropertyValue('--nasa-orange').trim() || '#E85D04',
      yellow: s.getPropertyValue('--cassette-yellow').trim() || '#FFD000',
    };
  }

  var yLabels = {
    innovation_rank: 'Innovation Rank (lower = more innovative)',
    freedom_score: 'Freedom Score (0\u2013100)',
  };

  // Normalize array to 0-1
  function normalize(arr) {
    var min = Math.min.apply(null, arr);
    var max = Math.max.apply(null, arr);
    var span = max - min || 1;
    return arr.map(function (v) { return (v - min) / span; });
  }

  function niceRange(arr) {
    var min = Math.min.apply(null, arr);
    var max = Math.max.apply(null, arr);
    var span = max - min || 1;
    return { min: min - span * 0.08, max: max + span * 0.08 };
  }

  function linReg(xs, ys) {
    var n = xs.length;
    var sx = 0, sy = 0, sxy = 0, sx2 = 0;
    for (var i = 0; i < n; i++) { sx += xs[i]; sy += ys[i]; sxy += xs[i] * ys[i]; sx2 += xs[i] * xs[i]; }
    var denom = n * sx2 - sx * sx;
    if (Math.abs(denom) < 1e-10) return null;
    return { slope: (n * sxy - sx * sy) / denom, intercept: (sy * sx2 - sx * sxy) / denom };
  }

  function pearson(xs, ys) {
    var n = xs.length;
    var sx = 0, sy = 0, sxy = 0, sx2 = 0, sy2 = 0;
    for (var i = 0; i < n; i++) { sx += xs[i]; sy += ys[i]; sxy += xs[i] * ys[i]; sx2 += xs[i] * xs[i]; sy2 += ys[i] * ys[i]; }
    var num = n * sxy - sx * sy;
    var den = Math.sqrt((n * sx2 - sx * sx) * (n * sy2 - sy * sy));
    return den === 0 ? 0 : num / den;
  }

  function mapX(val, range, w) { return PAD.left + (val - range.min) / (range.max - range.min) * (w - PAD.left - PAD.right); }
  function mapY(val, range, h) { return PAD.top + (1 - (val - range.min) / (range.max - range.min)) * (h - PAD.top - PAD.bottom); }
  function unmapX(px, range, w) { return range.min + (px - PAD.left) / (w - PAD.left - PAD.right) * (range.max - range.min); }
  function unmapY(px, range, h) { return range.min + (1 - (px - PAD.top) / (h - PAD.top - PAD.bottom)) * (range.max - range.min); }

  function resize() {
    var wrap = canvas.parentElement;
    var w = wrap.clientWidth;
    var h = Math.max(360, Math.round(w / ASPECT));
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { w: w, h: h };
  }

  function pointColor(freedom) {
    var t = freedom / 100;
    var r1 = 232, g1 = 93, b1 = 4;
    var r2 = 27, g2 = 58, b2 = 95;
    if (document.documentElement.getAttribute('data-theme') === 'dark') { r2 = 74; g2 = 122; b2 = 181; }
    return 'rgb(' + Math.round(r1 + (r2 - r1) * t) + ',' + Math.round(g1 + (g2 - g1) * t) + ',' + Math.round(b1 + (b2 - b1) * t) + ')';
  }

  function shortName(name) {
    var paren = name.indexOf('(');
    return paren > 0 ? name.substring(0, paren).trim() : name;
  }

  var hoverIdx = -1;
  var lastDim = { w: 0, h: 0 };
  var lastXRange, lastYRange, lastXs, lastYs;

  function draw() {
    var dim = resize();
    var w = dim.w, h = dim.h;
    lastDim = dim;
    var colors = getColors();
    var yKey = ySelect.value;

    // Read active weights and compute blended X
    var activeWeights = [];
    var activeLabels = [];
    var normalizedColumns = [];

    for (var wi = 0; wi < weights.length; wi++) {
      var wval = parseInt(weights[wi].slider.value, 10);
      if (wval <= 0) continue;
      activeWeights.push(wval);
      activeLabels.push(weights[wi].label);
      var col = data.map(function (d) { return d[weights[wi].key] || 0; });
      normalizedColumns.push(normalize(col));
    }

    // If no weights active, default to freedom
    if (activeWeights.length === 0) {
      activeWeights = [100];
      activeLabels = ['Freedom'];
      normalizedColumns = [normalize(data.map(function (d) { return d.freedom_score; }))];
    }

    var totalWeight = 0;
    for (var aw = 0; aw < activeWeights.length; aw++) totalWeight += activeWeights[aw];

    // Compute blended X per data point
    var xs = [];
    for (var i = 0; i < data.length; i++) {
      var sum = 0;
      for (var c = 0; c < normalizedColumns.length; c++) {
        sum += normalizedColumns[c][i] * activeWeights[c];
      }
      xs.push(sum / totalWeight);
    }
    // Scale to 0-100
    var bmin = Math.min.apply(null, xs), bmax = Math.max.apply(null, xs);
    var bspan = bmax - bmin || 1;
    xs = xs.map(function (v) { return ((v - bmin) / bspan) * 100; });

    var ys = data.map(function (d) { return d[yKey]; });

    var xRange = niceRange(xs);
    var yRange = niceRange(ys);
    lastXRange = xRange; lastYRange = yRange;
    lastXs = xs; lastYs = ys;

    // Clear
    ctx.fillStyle = colors.bg;
    ctx.fillRect(0, 0, w, h);

    // Grid
    ctx.strokeStyle = colors.border;
    ctx.lineWidth = 0.5;
    var gxn = 5, gyn = 5;
    ctx.beginPath();
    for (var gi = 0; gi <= gxn; gi++) {
      var gx = PAD.left + gi / gxn * (w - PAD.left - PAD.right);
      ctx.moveTo(gx, PAD.top); ctx.lineTo(gx, h - PAD.bottom);
    }
    for (var gj = 0; gj <= gyn; gj++) {
      var gy = PAD.top + gj / gyn * (h - PAD.top - PAD.bottom);
      ctx.moveTo(PAD.left, gy); ctx.lineTo(w - PAD.right, gy);
    }
    ctx.stroke();

    // Grid labels
    ctx.fillStyle = colors.textLight;
    ctx.font = '10px Inter, sans-serif';
    ctx.textAlign = 'center';
    for (var gi = 0; gi <= gxn; gi++) {
      var gx = PAD.left + gi / gxn * (w - PAD.left - PAD.right);
      ctx.fillText(Math.round(unmapX(gx, xRange, w)), gx, h - PAD.bottom + 16);
    }
    ctx.textAlign = 'right';
    for (var gj = 0; gj <= gyn; gj++) {
      var gy = PAD.top + gj / gyn * (h - PAD.top - PAD.bottom);
      ctx.fillText(Math.round(unmapY(gy, yRange, h)), PAD.left - 8, gy + 3);
    }

    // X-axis label
    ctx.fillStyle = colors.text;
    ctx.font = '11px Inter, sans-serif';
    ctx.textAlign = 'center';
    var xLabel;
    if (activeLabels.length === 1) {
      xLabel = activeLabels[0];
    } else if (activeLabels.length <= 3) {
      xLabel = activeLabels.join(' + ');
    } else {
      xLabel = activeLabels.length + ' weighted factors';
    }
    xLabel = 'Composite: ' + xLabel;
    ctx.fillText(xLabel, PAD.left + (w - PAD.left - PAD.right) / 2, h - 6);

    // Y-axis label
    ctx.save();
    ctx.translate(14, PAD.top + (h - PAD.top - PAD.bottom) / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.textAlign = 'center';
    ctx.fillText(yLabels[yKey], 0, 0);
    ctx.restore();

    // Trendline
    var reg = linReg(xs, ys);
    if (reg) {
      ctx.strokeStyle = colors.orange;
      ctx.lineWidth = 2;
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      var x1 = xRange.min, x2 = xRange.max;
      var y1c = Math.max(yRange.min, Math.min(yRange.max, reg.slope * x1 + reg.intercept));
      var y2c = Math.max(yRange.min, Math.min(yRange.max, reg.slope * x2 + reg.intercept));
      ctx.moveTo(mapX(x1, xRange, w), mapY(y1c, yRange, h));
      ctx.lineTo(mapX(x2, xRange, w), mapY(y2c, yRange, h));
      ctx.stroke();
      ctx.setLineDash([]);
    }

    // Data points
    for (var i = 0; i < data.length; i++) {
      var px = mapX(xs[i], xRange, w);
      var py = mapY(ys[i], yRange, h);
      var isHover = i === hoverIdx;
      var size = isHover ? POINT_SIZE + 2 : POINT_SIZE;

      ctx.fillStyle = isHover ? colors.yellow : pointColor(data[i].freedom_score);
      ctx.fillRect(px - size, py - size, size * 2, size * 2);

      if (isHover) {
        ctx.strokeStyle = colors.orange;
        ctx.lineWidth = 2;
        ctx.strokeRect(px - size - 1, py - size - 1, size * 2 + 2, size * 2 + 2);
      }

      ctx.fillStyle = isHover ? colors.text : colors.textLight;
      ctx.font = (isHover ? 'bold ' : '') + '9px Inter, sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(shortName(data[i].name), px + size + 4, py + 3);
    }

    // Correlation badge
    var r = pearson(xs, ys);
    ctx.fillStyle = colors.bg;
    ctx.fillRect(w - PAD.right + 10, PAD.top, PAD.right - 14, 80);

    ctx.fillStyle = colors.textLight;
    ctx.font = '10px Inter, sans-serif';
    ctx.textAlign = 'left';
    ctx.fillText('CORRELATION', w - PAD.right + 14, PAD.top + 14);

    ctx.fillStyle = Math.abs(r) > 0.5 ? colors.orange : colors.textLight;
    ctx.font = 'bold 18px Inter, sans-serif';
    ctx.fillText('r = ' + r.toFixed(3), w - PAD.right + 14, PAD.top + 38);

    var strength = Math.abs(r) > 0.7 ? 'Strong' : Math.abs(r) > 0.4 ? 'Moderate' : 'Weak';
    ctx.fillStyle = colors.textLight;
    ctx.font = '10px Inter, sans-serif';
    ctx.fillText(strength, w - PAD.right + 14, PAD.top + 54);
  }

  // Hit test
  function hitTest(mx, my) {
    if (!lastXs || !lastYs) return -1;
    var w = lastDim.w, h = lastDim.h;
    var best = -1, bestDist = 22;
    for (var i = 0; i < data.length; i++) {
      var px = mapX(lastXs[i], lastXRange, w);
      var py = mapY(lastYs[i], lastYRange, h);
      var dx = mx - px, dy = my - py;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < bestDist) { bestDist = dist; best = i; }
    }
    return best;
  }

  function showTooltip(idx, mx, my) {
    if (idx < 0) { tooltip.style.display = 'none'; return; }
    var d = data[idx];
    var rows = [
      ['Syllables/sec', d.syllables_per_sec.toFixed(2)],
      ['Bits/syllable', d.bits_per_syllable.toFixed(2)],
      ['Bits/sec', d.bits_per_sec.toFixed(2)],
      ['Innovation rank', d.innovation_rank],
      ['Freedom score', d.freedom_score],
      ['R&D (% GDP)', (d.rd_pct || 0).toFixed(1)],
      ['Education index', (d.education || 0).toFixed(2)],
      ['Social trust', (d.social_trust || 0).toFixed(1) + '%'],
      ['Trade openness', (d.trade_openness || 0) + '%'],
      ['Econ freedom', (d.econ_freedom || 0).toFixed(1)],
    ];
    var html = '<strong>' + d.name + '</strong><br><span class="xeno-tt-species">' + d.species + '</span><br>';
    for (var r = 0; r < rows.length; r++) {
      html += '<div class="xeno-tt-row"><span>' + rows[r][0] + '</span><span class="xeno-tt-val">' + rows[r][1] + '</span></div>';
    }
    tooltip.innerHTML = html;
    tooltip.style.display = 'block';

    var wrap = canvas.parentElement;
    var ww = wrap.clientWidth, wh = wrap.clientHeight || 500;
    var ttW = tooltip.offsetWidth, ttH = tooltip.offsetHeight;
    var left = mx + 16, top = my - ttH / 2;
    if (left + ttW > ww) left = mx - ttW - 12;
    if (top < 0) top = 4;
    if (top + ttH > wh) top = wh - ttH - 4;
    tooltip.style.left = left + 'px';
    tooltip.style.top = top + 'px';
  }

  function onMove(e) {
    var rect = canvas.getBoundingClientRect();
    var mx = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    var my = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    var idx = hitTest(mx, my);
    if (idx !== hoverIdx) { hoverIdx = idx; draw(); showTooltip(idx, mx, my); }
  }

  function onLeave() {
    if (hoverIdx !== -1) { hoverIdx = -1; draw(); tooltip.style.display = 'none'; }
  }

  canvas.addEventListener('mousemove', onMove);
  canvas.addEventListener('mouseleave', onLeave);
  canvas.addEventListener('touchmove', function (e) { e.preventDefault(); onMove(e); }, { passive: false });
  canvas.addEventListener('touchend', onLeave);
  ySelect.addEventListener('change', draw);

  new MutationObserver(function () { draw(); }).observe(
    document.documentElement, { attributes: true, attributeFilter: ['data-theme'] }
  );

  var resizeTimer;
  window.addEventListener('resize', function () { clearTimeout(resizeTimer); resizeTimer = setTimeout(draw, 100); });

  draw();
})();
