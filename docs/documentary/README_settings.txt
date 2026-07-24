CASSETTE FUTURISM DOC — ELEVENLABS QUICK GUIDE
==============================================

TWO WAYS TO DO IT
-----------------
EASIEST (Studio): open ElevenLabs Studio -> new project -> paste
  00_MASTER_continuous.txt -> assign ONE narrator voice -> Convert -> export MP3.
  Studio auto-chunks and paces the pauses for you.

MOST CONTROL (Text-to-Speech workbench): generate files 01..05 one at a time,
  SAME voice + SAME settings each time. Save as 01.mp3 ... 05.mp3 and lay them
  on your timeline under the visuals. Re-roll any single chapter freely.

SETTINGS (use identical values on every chapter)
------------------------------------------------
Model:         Eleven Multilingual v2   (stable for long-form narration)
Stability:     55-60%   (consistent, won't drift between chapters)
Similarity:    75%
Style:         0-15%    (documentary = restrained)
Speaker boost: On
Speed:         0.92     (v3 only; omit on v2)

Voice: one warm, older, dry narrator. LOCK it across all 5 chapters.

BAKED-IN PRONUNCIATION FIXES
----------------------------
- "MU/TH/UR" written as "Mother" (correct pronunciation).
- All years spelled out (e.g. "nineteen seventy-nine") so TTS won't misread them.

COST: ~1,600 words total, well under 90k credits — plenty of room to try 2-3
different narrator voices and pick the best.

OPTIONAL TAPE TEXTURE: generate clean, then layer real tape hiss / wow-and-
flutter in your editor. Cleaner than asking TTS to fake it.
