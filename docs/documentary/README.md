# Cassette Futurism Documentary — production kit

A short documentary ("A Better Yesterday") on cassette futurism, produced under
the Cassette Future Magazine brand. ~11–13 min, single narrator VO, 21:9
("filmoru") format. Three acts: **Aesthetic → History → the Butlerian fork**
(a Dune-derived thought experiment on how a cassette future is still possible).

## Files
- **PRODUCTION_annotated.txt** — the master shot sheet. All 55 shots tagged
  `[VIDEO]` (ElevenLabs, ~12 core) or `[STILL]` (ComfyUI + Ken Burns, ~39), each
  with prompt, model/checkpoint, and camera move. **Work from this.**
- **cfm-documentary-script.txt** — the readable script with visual cues (the
  human version of the shot sheet).
- **00_MASTER_continuous.txt** — full narration, one paste for ElevenLabs Studio.
- **01–05_*.txt** — narration split by act/chapter for separate TTS generations.
- **README_settings.txt** — ElevenLabs TTS voice settings + pronunciation fixes.
- **SHOTLIST_elevenlabs-video.txt** — the all-video version (pre-budget-cut).

## Workflow
1. Generate ONE video test clip (C01) to lock the look + confirm per-clip credit
   cost, then batch the ~12 `[VIDEO]` shots.
2. Generate the `[STILL]` shots on ComfyUI (SDXL, IP-Adapter style-locked to a
   CFP render, 16:9 → crop to 21:9).
3. Assemble in DaVinci Resolve: clips + stills in C-order, Ken Burns on stills,
   narration under, ElevenMusic pad + tape-hiss/CRT-hum SFX, crop to 21:9, export.

Constraints: face-free, flag-free (per brand rules). Film-homage shots (Alien /
Star Wars / Blade Runner) are original era-imagery, not the copyrighted films.
