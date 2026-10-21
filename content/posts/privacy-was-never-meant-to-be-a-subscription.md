---
date: '2026-10-21T10:49:27'
draft: false
featured_image: /images/header-privacy-was-never-meant-to-be-a-subscription.jpg
image_prompt: 'A cluttered public maker-lab aboard an orbital station, wide cinematic
  shot: a workbench covered in disassembled mobi devices, magnetic tape reels, and
  chunky analog test equipment. A large CRT oscilloscope glows green with a jagged
  RF emission waveform, next to a reel-to-reel data logger with blinking amber lights.
  A woman in a worn jumpsuit leans over an open handset chassis under a gooseneck
  lamp, soldering iron in hand, schematics taped to the wall behind her alongside
  hand-drawn diagrams. Through a round porthole window behind the bench, Earth hangs
  pale blue against star-flecked black, with a cargo freighter drifting past. Warm
  practical lighting mixes with cold blue CRT glow, dust motes visible in the light
  beams, sense of motion from a spinning station ring reflected in the window.'
issue_number: '2935.294'
journalist: 小林 ヴェラ
journalist_title: Technology & Science Editor
source_reference:
  cited:
  - https://www.youtube.com/watch?v=ZGjjSciluQQ&t=489s
  - https://abovephone.com/tbot/?mtm_campaign=social&mtm_source=tbot
  source: Take Back Our Tech
  title: Where Does the Privacy Line Stop?
  url: https://tbot.substack.com/p/where-does-the-privacy-line-stop
subtitle_jp: 位置データを売るテレメトリー業者と、鍵のかかった「安全携帯」の正体を自作検証する
tags:
- open hardware
- right to fabricate
- privacy
- maker culture
- data brokers
- mobi devices
- open source
- surveillance
title: Privacy Was Never Meant to Be a Subscription
title_jp: プライバシーは購読制にあらず
year: 2935
---

I keep getting asked to review the new "privacy mobi" everyone's trading schematics for near Kardashia Dock. Before I even opened the case, I had one question money can't answer: who built the firmware, and can I read it?

Three centuries after the Mendez Transmissions cracked open the old Earth surveillance apparatus, the lesson didn't stick. Location telemetry — once something the Terran Intelligence Bureau at least had to request through a warrant, however theatrical that process was — now moves freely between "signal brokers," no warrant, no judge, just a credit transfer. Your mobi's accelerometer, your sleep-ring's pulse log, the grip sensor on your fabricator: all of it has a price tag at the Oorsten Exchange, sold in bulk lots to anyone with standing credit.

I sat down — over a scratchy comm-line, because of course — with Teshen Voss, who's spent a decade mapping where biometric exhaust actually ends up. His answer to "where's the line" was refreshingly honest: there isn't one. Not because nobody's drawn it, but because every new sensor redraws it. Skin conductance. Gait signature. The micro-tremor in your hand when you grab a railing. All of it is data now, and data, once collected, behaves like water — it finds the cracks.

So naturally, a mega-corp solved this. Halcyon Dynamics will sell you the "Sanctum Mobi" — closed bootloader, proprietary radio stack, 14 SGC a cycle — and ask you to trust, on faith, that it isn't doing exactly what it claims to prevent. You can't audit the firmware. You can't check the RF emissions yourself. You're renting back a promise.

That's the part that actually sits wrong with me — not the surveillance itself, which is at least honestly venal, but the idea that privacy got turned into a subscription tier. Transparency shouldn't come with a billing cycle.

So I built the alternative in the public lab, the way I build everything: off a bench, with parts anyone can source from a scrap fabricator queue. Open firmware, forked from the Driftcore project. A radio stack you can read top to bottom. And — this is the part I actually care about — a spectrum analyzer rig cheap enough that you don't have to take my word for any of it.

The method, stripped down:

- Flash the open firmware, log every outbound packet for 72 hours against a known-clean baseline.
- Run the handset through a Faraday sleeve and confirm zero emissions at rest — if it chirps in the box, something's phoning home.
- Cross-check the manifest against the Driftcore registry, which lists every library and exactly what it touches.

None of this is hard. None of it should be proprietary. The schematics, the firmware fork, and my 72-hour emission logs are sitting in the public lab archive under this issue's docket number — free to copy, free to improve, free to argue with.

Try it on your own bench. That's the whole point.
