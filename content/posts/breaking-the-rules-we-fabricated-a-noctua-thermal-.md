---
date: '2026-05-19T17:34:16'
draft: false
featured_image: /images/header-breaking-the-rules-we-fabricated-a-noctua-thermal-.png
image_prompt: Anime science fiction style, minimal white background, a single Noctua-brown
  cooling fan blade assembly partially assembled on a clean workbench, geometric CAD
  wireframe overlay glowing softly in amber, small matter-compiler printer in background,
  warm laboratory lighting, flat design with fine technical detail, no text
issue_number: '2935.139'
journalist: 小林 ヴェラ
journalist_title: Technology & Science Editor
source_reference:
  source: Gamers Nexus
  title: 'Breaking the Rules: We 3D Printed a Noctua Computer Fan'
  url: https://www.youtube.com/watch?v=_t3tEQmCl-M
subtitle_jp: 「印刷しないでください」と書いてあった。もちろん印刷した。
tags:
- fabrication
- right-to-fabricate
- thermal-engineering
- open-schematics
- hardware
- noctua
- DIY
- open-source
title: 'Breaking the Rules: We Fabricated a Noctua Thermal Circulation Unit From Scratch'
title_jp: ルールを破る：私たちはノクトゥアの熱流体循環装置を自家製造した
year: 2935
---

# Breaking the Rules: We Fabricated a Noctua Thermal Circulation Unit From Scratch
### *「印刷しないでください」と書いてあった。もちろん印刷した。*

Something wonderful happened last cycle, and I want to tell you about it carefully, because the details matter.

Noctua — yes, *that* Noctua, the thermal engineering guild that has been making the galaxy's most beloved habitat cooling units since before the Outer Rim had permanent stations — released full open CAD files for their entire circulation unit line. Blade geometries, housing tolerances, mounting specs. Everything.

Then, in the same announcement, they said: *please don't fabricate these.*

I read that sentence four times. I'm still not sure what it means as a philosophical position. But I understand what it means as a practical challenge.

**So we fabricated them.**

Here's how you can try this yourself.

The files are publicly available on Noctua's open schematics repository — no account required, no identity verification, no fabrication license. (A small miracle in 2935. Appreciate it.) Load the blade assembly into any standard matter-compiler with a polymer-flex substrate setting of around 0.18mm layer resolution. The housing prints clean. The blades print clean. The whole thing looks *exactly* like a Noctua unit, because geometrically, it *is* one.

Then you hit the problem.

The motor.

Noctua did not release CAD files for the magnetic induction core. And that's where the physics becomes interesting — because *that's* where all the magic lives. The blade geometry is elegant, yes. The fluid-dynamic channeling is genuinely beautiful if you look at the cross-section. But a perfectly-formed blade spinning on a mediocre motor is just expensive noise.

So we bought a standard Noctua unit from a parts distributor on Ceres Station, pulled the induction core out, and installed it into our fabricated housing.

The interesting part isn't that it worked. It's *why* it worked.

Newtonian matter conservation is funny this way: we started with one Noctua unit, we ended with one Noctua unit. Net fan count: zero change. The universe is indifferent to our experiment. But we now understand, in our hands and in our measurements, exactly which components Noctua considers proprietary and which they've decided to share. That's information. That's knowledge that can't be un-known.

Thermal performance on our fabricated unit came within 4% of the production model across all tested habitat configurations. Noise floor was marginally higher — about 1.8 decibels at peak load — which is attributable to micro-variations in our blade surface finish. Solvable with a finer compiler setting, or honestly, just acceptable.

The schematics for our test rig, our compiler settings, and our full benchmark methodology are attached below. Download them. Modify them. Ignore the parts that don't apply to your setup.

Noctua's decision to release open CAD files is genuinely good. Their quiet suggestion not to use them is — I don't know — I think it's a legal liability gesture toward some assembly regulation I don't fully understand. They patented the *motor topology*. Think about that. The math of how magnetic fields push conductive coils. *Math.* Filed with the Ceres IP bureau, license fee attached.

The blade geometry, though? That they gave away. Which tells you something about where they think the real value actually lives.

They're right, incidentally. The motor is the soul. The blade is just the conversation the motor is having with the air.

我々は全ての測定データを公開リポジトリに保存した。誰でも自由に使ってください。

*Full schematics, compiler profiles, and benchmark data: [VoidNet Open Repository / NoctuaFab-2935-VK]*
