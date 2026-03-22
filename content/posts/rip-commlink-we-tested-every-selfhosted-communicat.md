---
date: '2026-03-22T12:02:50'
draft: false
featured_image: /images/header-rip-commlink-we-tested-every-selfhosted-communicat.png
image_prompt: Anime sci-fi illustration, minimal white background, a young woman with
  short dark hair soldering together a small glowing communication relay server on
  a workbench, various holographic comm system interfaces floating around her showing
  signal graphs and connection diagrams, warm amber workshop lighting, clean linework,
  slightly retro-futuristic aesthetic, cassette-punk technology
issue_number: '2935.081'
journalist: 小林 ヴェラ
journalist_title: Technology & Science Editor
subtitle_jp: VoidTalk強制ID登録の後、本当の選択肢は何か？
tags:
- technology
- communications
- self-hosted
- privacy
- open-source
- VoidTalk
- right-to-fabricate
- neural-net
title: 'RIP CommLink: We Tested Every Self-Hosted Communication System So You Don''t
  Have To'
title_jp: コムリンクよ、さらば：自前で動かすコミュニケーション・システムを全部試した
year: 2935
---

## The Thing That Finally Did It

VoidTalk announced mandatory neural-ID verification for all accounts last quarter. Not optional. Not for flagged users. *All* accounts. Your conversation history, your voice patterns, your contact graph — all now legally tied to your Galactic Registry ID and available to the Terran Intelligence Bureau upon request.

A lot of people I know just... kept using it. I understand why. Migration is friction. Friction is uncomfortable.

But here's the thing: the friction of leaving is a one-time cost. The friction of staying compounds forever.

So I spent six weeks building every serious self-hosted alternative I could find, running them on the same salvaged server rack I use for everything else in the public lab. Here's how you can try this yourself.

---

## What We're Actually Testing

Self-hosted only. No 'federated but ultimately someone else's node' half-measures. The criterion was simple: if the company behind this dissolves tomorrow, can you still run your communications? If yes, we tested it.

The six systems: **QuantumMesh**, **VoidLink** (not affiliated with VoidTalk — confusing, I know), **FreeSpace**, **NovaCom**, **ChronoRelay**, and **OpenHail**.

I tested voice quality, latency across simulated deep-space relay hops, group channel stability, mobi device sync, and — critically — what data leaves your server and where it goes.

All methodology is published at the lab. Replicate it. Argue with my numbers. That's the point.

---

## The Results, Without Drama

**QuantumMesh** is the closest functional replacement for VoidTalk. Voice is clean, the interface won't confuse anyone who's used any comm system in the last century, and setup takes about forty minutes if you've never done this before. The documentation is genuinely good. Only concern: default config phones home to QuantumMesh's analytics relay. Turn that off before you do anything else. The setting is buried but it's there.

**VoidLink** is for people who want to understand what their software is doing. Extremely configurable. The kind of system where you can inspect every packet if you want to. Setup took me three hours, and I've been doing this for twenty years. Not for everyone. For some people, exactly right.

**FreeSpace** is beautiful and half-finished. Voice calls drop under load. The developers are moving fast and the community is generous. Check back in a year.

**NovaCom** is technically impressive and spiritually exhausting. It was built by a defense contractor subsidiary — NovaCom is open-source now, but the architecture still feels like it was designed to be audited by someone with a security clearance. It works. I didn't enjoy using it.

**ChronoRelay** surprised me. Modest reputation, modest interface, works perfectly. Low resource overhead. Runs on hardware you probably already have. I'm genuinely puzzled why more people aren't using this one. The interesting part isn't that it works — it's *why* it works: the protocol is so simple there's almost nothing to break.

**OpenHail** is unmaintained. Remove it from your list.

---

## The Part That Shouldn't Need Saying

VoidTalk built something genuinely useful. I'm not pretending otherwise. But useful tools with surveillance obligations built into their terms of service aren't really tools — they're leashes with good UX.

They patented the *handshake protocol*. Think about that. The mathematical process by which two devices agree to talk to each other. Owned. Licensed. Revocable.

The alternatives exist. They're not perfect. Neither was VoidTalk, and at least these won't sell your contact graph to a TIB data broker.

Full benchmark tables, server config files, and a beginner's setup guide are on the lab's open node. No registration required. Obviously.

---

*Schematics and config files: lab.cassette-future.net/comms-test-2935 — copy them, modify them, share them*
