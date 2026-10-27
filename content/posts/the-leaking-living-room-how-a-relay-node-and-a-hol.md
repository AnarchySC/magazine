---
date: '2026-10-27T17:40:20'
draft: false
featured_image: /images/header-the-leaking-living-room-how-a-relay-node-and-a-hol.jpg
image_prompt: A cluttered public maker-lab aboard a space station, lit by the blue
  glow of CRT oscilloscopes and a dismantled chunky holoscreen propped open on a workbench,
  its circuit boards exposed under a swing-arm lamp. In the background through a station
  window, orbital traffic streams past a cafe-lined promenade with a visible analog
  Wi-Fi relay dish mounted outside; a woman in a technician's coat leans over the
  bench with a signal probe, cables and spare comm-relay node housings scattered around
  her, retro-analog dials and blinking indicator lights throughout, cinematic wide
  shot, dramatic high-contrast lighting.
issue_number: '2935.300'
journalist: 小林 ヴェラ
journalist_title: Technology & Science Editor
source_reference:
  source: Gamers Nexus
  title: The ASUS + LG Nightmare Scenario
  url: https://www.youtube.com/watch?v=kYnwCx2SNYY
subtitle_jp: ロビーのWi-Fiから寝室まで──三段構えの侵入経路を自分の手で検証した
tags:
- right to fabricate
- security research
- open hardware
- maker culture
- comm-relay nodes
- holoscreen privacy
- DIY repair
title: 'The Leaking Living Room: How a Relay Node and a Holoscreen Conspired to Listen'
title_jp: 漏れる居間:通信中継器とホロビジョンが仕組んだ盗聴の連鎖
year: 2935
---

I did this from a cafe table, using a mobi device, a second-hand signal probe, and about forty minutes.

An independent researcher who publishes under the handle Null-Sigma found a flaw in the firmware of Aszuna Networks' comm-relay nodes — the little boxes bolted to the wall in roughly every third habitat unit across the Core Systems and a good share of the Frontier Settlements besides. Aszuna has sold somewhere between 25 and 35 million of these since its last major hardware revision. That's not a typo. That's most of the fleet.

On its own, the relay flaw lets an attacker slip onto your local network from outside it — through an office lobby signal, a cafe's open node, even an unshielded wall socket two units down. That's bad, but routers get bad patches all the time, and usually the story ends there.

This one didn't. Null-Sigma, working with a few of us in the open-repair community, chained the relay flaw into a second, unpatched vulnerability in Elgee Hologlass viewscreens — a remote-execution bug in how the screens process their voice-command channel. Combine the two and you can go from 'guest Wi-Fi in a cafe' to 'live audio feed from someone's living room' without ever touching their front door.

I rebuilt the chain myself, on my own bench, using only parts I already owned and the public writeup Null-Sigma released alongside the finding. It worked on the first clean attempt. That detail should bother you more than any of the technical jargon: this isn't an exotic, intelligence-grade intrusion. It's a Tuesday-afternoon project for anyone curious enough to try.

Aszuna's response, when notified, was to ask for more time before disclosure — the standard move, and one I've stopped being surprised by, though I haven't stopped finding it strange. A device that listens in your home is not a feature you quietly patch on your own schedule. It's a design decision you owe people an apology for.

Here's how you can try this yourself — safely, on your own hardware, which is the only hardware you should ever point this at. Check your relay node's firmware version against Null-Sigma's published list. If your holoscreen has an always-listening voice feature, physically disable the microphone circuit rather than trusting the software toggle; I've posted the teardown diagram showing which pad to cut on the three most common Elgee boards. Segment your home network so your viewscreen can't reach anything sensitive even if it's compromised. None of this requires a technician's license. It requires a screwdriver and twenty quiet minutes.

The pattern I keep running into on this beat: the vulnerability research is open. The fix is where everyone starts charging you, stalling you, or asking you to wait. Knowledge about your own walls shouldn't need a subscription tier.
