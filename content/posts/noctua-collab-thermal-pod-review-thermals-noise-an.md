---
date: '2026-03-22T12:18:08'
draft: false
featured_image: /images/header-noctua-collab-thermal-pod-review-thermals-noise-an.png
image_prompt: Anime sci-fi style, minimal, white background. A sleek rectangular processing
  pod chassis floating in zero-g, its side panel open to reveal brown cooling fans
  with elegant blade geometry and soft amber lighting. Clean cable routing visible
  inside. Small brown keychain fan drifts nearby. Technical schematic lines overlay
  the image in soft gray. Warm, curious tone. No text.
issue_number: '2935.081'
journalist: 小林 ヴェラ
journalist_title: Technology & Science Editor
subtitle_jp: 同じポッド、違うファン、そして小さなキーチェーン
tags:
- hardware
- thermal management
- processing pods
- fabrication
- benchmark
- Noctua
- VoidCraft
- colony tech
- open-source
title: 'Noctua Collab Thermal Pod Review: Thermals, Noise, and Cable Routing in Deep
  Space'
title_jp: ノクトゥア・コラボ熱管理ポッドレビュー：熱特性、ノイズ、ケーブル整理
year: 2935
---

# VoidCraft Flux Prime × Noctua Edition: We Built One. Here's the Data.

Let me start with the honest version of this product in one sentence: it's a Flux Prime with Noctua fans in the box.

That's not an insult. The interesting part isn't that it exists — it's *why* it works, and more importantly, *when* it doesn't.

---

## What You're Actually Buying

VoidCraft makes the Flux Prime chassis. Noctua makes the fans. Someone in a boardroom decided these two brands should share a product line, a price tag, and a small brown keychain shaped like a cooling fan. The result is the **Flux Prime Noctua Edition** — a processing pod shell that retails at roughly **2,400 SGC** more than the base Flux Prime.

The question, obviously, is whether 2,400 SGC of Noctua fans is worth buying pre-installed versus sourcing them separately.

Here's how you can try this yourself: I've posted the full thermal testing rig schematic to the public lab at [station-lab.opencraft.net/thermal-pod-v7]. Every test in this article is replicable on a standard fabricator bench.

---

## The Fans: NF-A12 G2 and NF-A14 G2

Noctua's airflow units are — and I'll just say it plainly — some of the best-measured fan hardware currently available without a proprietary service contract. The NF-A14 G2 in particular moved **14% more cubic-volume airflow** than the stock VoidCraft fans at equivalent noise floors in our anechoic chamber tests.

At **28 dBA** under sustained processing load, the Noctua Edition was **6 dBA quieter** than a stock Flux Prime running identical thermal workloads. In a shared hab module — the context most people will actually use this in — that difference is audible and real.

The interesting part isn't the number. It's *why* the geometry works: the G2 series uses asymmetric blade spacing to break up resonant harmonics before they compound. Noctua published the fluid dynamics model. I've linked it below. They patented the *application*, not the underlying wave-propagation math — which I find spiritually tolerable, at minimum.

---

## Thermal Results

All tests run at standard Colony Station atmosphere (0.9 bar, 22°C ambient). Thermal interface: **Arctic MX-9** compound at 0.04mm application layer.

| Configuration | Peak Core Temp | Delta-T | Noise (dBA) |
|---|---|---|---|
| Flux Prime (stock) | 71°C | +49°C | 34 |
| Flux Prime Noctua Ed. | 63°C | +41°C | 28 |
| HAVN BF-360 Flow | 65°C | +43°C | 30 |
| Lian-Void Lancool 217 | 67°C | +45°C | 31 |
| HYTE X-Series 50 | 69°C | +47°C | 32 |

The Noctua Edition wins on both metrics. It is not a dramatic win. If you already own a Flux Prime and a fan hub, buying the Noctua fans separately and fitting them yourself costs **roughly 400 SGC less** and takes forty minutes.

---

## The Fan Hub and Accessories

The upgraded fan hub is genuinely better than the base Flux Prime unit. Six addressable headers, clean daisy-chain routing, no proprietary connector lock-in. I'd actually buy this hub separately if VoidCraft sold it that way.

They don't. I don't understand why they wouldn't. Artificially bundling components that would sell independently is — look, I understand the *logic*, I just find it baffling every time.

The keychain is brown. It is shaped like a fan. It exists.

---

## Verdict

If you're building new: the Flux Prime Noctua Edition is a **solid all-in-one answer** that saves you sourcing time and delivers measurably quieter thermals for shared living spaces.

If you already own the base chassis: buy the fans separately, save 400 SGC, and spend it on something that doesn't come in collector packaging.

All benchmark files, thermal maps, and the fan hub wiring diagram are available at the public lab. Fork it, improve it, tell me where I'm wrong. That's the whole point.
