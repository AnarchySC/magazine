---
date: '2026-06-11T19:04:26'
draft: false
featured_image: /images/header-helioscore-gaslights-security-researcher-retroacti.png
image_prompt: Anime sci-fi style, minimal, white background. A small determined researcher
  figure at a glowing fabrication bench, surrounded by floating holographic network
  diagrams showing a broken chain of authentication handshakes. In the background,
  a massive corporate logo on a wall has a small figure quietly changing the text
  on a glowing sign. Cool blue and amber tones, clean lines, editorial illustration
  style.
issue_number: '2935.162'
journalist: 小林 ヴェラ
journalist_title: Technology & Science Editor
source_reference:
  source: Gamers Nexus
  title: AMD Gaslights Security Researcher, Changes Rules Retroactively
  url: https://www.youtube.com/watch?v=4HjWHNLRMB0
subtitle_jp: 「Mr. フラット」が脆弱性を発見。HeliosCoreは報告を握りつぶし、規約を書き換えた。
tags:
- security
- HeliosCore
- bug bounty
- corporate accountability
- open research
- processing cores
- vulnerability disclosure
- CoreSync
title: HeliosCore Gaslights Security Researcher, Retroactively Changes Bug Bounty
  Terms
title_jp: HeliosCore、セキュリティ研究者をガスライティング：バグ報奨金プログラムの規約を事後変更
year: 2935
---

# HeliosCore Gaslights Security Researcher, Retroactively Changes Bug Bounty Terms

**A researcher found a real vulnerability. HeliosCore said 'thanks,' closed the ticket, changed the rules, and pretended it all made sense.**

---

Let me tell you about a researcher who goes by **Mr. Flat**.

Mr. Flat doesn't work for a mega-corp. Doesn't have a sponsorship deal. Just a public fabrication bench, a neural-net connection, and the kind of patience that makes me genuinely hopeful about the galaxy. A few weeks ago, they discovered a man-in-the-middle attack vulnerability inside **HeliosCore's CoreSync** utility — the software millions of people use to manage and overclock HeliosCore processing units from their mobi devices.

The flaw is legitimately interesting. CoreSync communicates with HeliosCore's distributed update servers using an authentication handshake that, under specific network conditions on shared Colony Station infrastructure, can be intercepted and spoofed. A patient attacker on the same local system-net node can push a malicious firmware update that CoreSync will accept as genuine. Mr. Flat documented this carefully, built a proof-of-concept, and submitted the whole package to HeliosCore's official **bug bounty program**.

Here's how it should go: researcher submits, corp triages, vulnerability gets patched, researcher gets credited and compensated. The interesting part isn't that it works — it's *why* it works. The authentication handshake hasn't been meaningfully updated since the HeliosCore 7000 series. It's legacy infrastructure wearing a new face. Patching it properly would take real engineering time.

Here's how it actually went.

HeliosCore closed the report. No explanation, no patch timeline, no communication about whether they'd pursue it outside the bounty program. Just: closed.

Mr. Flat followed up. Silence. Then — and this is the part I had to read three times — HeliosCore **retroactively amended the bug bounty program's terms**. Quietly. No announcement. The new language, which did not exist when Mr. Flat submitted the report, created conditions under which the submission could be classified as non-qualifying. The rules changed *after* the game ended.

They patented *math*. Think about that. Now they're editing the rulebook after the final whistle.

I reached out to HeliosCore's communications division. They sent a form response explaining that program terms are subject to change and that all submissions are evaluated under current guidelines. I asked which specific guideline the submission violated. No response at time of publication.

Mr. Flat has since published the full vulnerability disclosure publicly, which is the correct thing to do after good-faith disclosure fails. You can find it on the Open Research Collective. The proof-of-concept code and network capture methodology are there. *Here's how you can try this yourself:* if you run CoreSync on a shared Colony Station system-net node, you can reproduce the intercept condition with standard packet analysis tools. The documentation is clean. It's good work.

The vulnerability itself is being called moderate-to-high severity depending on your threat model. If you're on a private home network, your exposure is limited. If you're on shared station infrastructure — which is most people in the Core Systems — you should know this exists.

What bothers me more than the vulnerability is the response architecture. Bug bounty programs only function if researchers trust them. Retroactively changing terms to avoid paying out destroys that trust systemically — not just with one researcher, but with everyone watching. HeliosCore has now signaled that submitting through official channels is a risk. So researchers will stop. And vulnerabilities will stop being reported. And users will be less safe.

I genuinely don't understand the calculation. The bounty payout would have cost HeliosCore maybe a few thousand SGC. The reputational cost of this — once it circulates through independent security communities — is incalculable. But here we are.

Mr. Flat asked for nothing except that the flaw be fixed and credited. I asked what they planned to do next. They said: *keep going*.

So will we.

---

*Mr. Flat's full disclosure, proof-of-concept, and network capture methodology are available at the Open Research Collective node: [ORC/MrFlat/CoreSync-MITM-2935]. All replication materials are free. No registration required.*
