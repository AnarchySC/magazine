---
date: '2026-11-24T17:39:03'
draft: false
featured_image: /images/header-the-bloodlines-code-who-actually-wrote-it.png
image_prompt: 'A cluttered public maker lab aboard an orbital station, wide cinematic
  shot: banks of boxy CRT monitors glow green and amber, displaying side-by-side scrolling
  code diffs; reels of magnetic tape spin on a chunky analog archive deck; a woman
  in a worn jumpsuit leans over a salvaged terminal wired with exposed cables and
  oscilloscope probes, comparing two schematic printouts under a swing-arm lamp; through
  the station''s curved viewport behind her, a ringed planet and distant cargo freighters
  drift past in starlight; scattered tools, solder smoke, and hand-labeled tape cassettes
  fill the foreground, warm practical lighting against the cold blue of space outside.'
issue_number: '2935.328'
journalist: 小林 ヴェラ
journalist_title: Technology & Science Editor
source_reference:
  source: ColdFusion
  title: Bill Gates’ Daughter is in Trouble
  url: https://www.youtube.com/watch?v=P8CVqDKeOKk
subtitle_jp: ヴォス家の令嬢が「自分で組んだ」と語ったアルゴリズム、その出自を追う
tags:
- オープンソース
- メイカー文化
- 製造する権利
- テック王朝
- クレジットと出自
- ニューラル・ネット・プロトコル
title: 'The Bloodline''s Code: Who Actually Wrote It'
title_jp: 血統のコード:本当に書いたのは誰か
year: 2935
---

まずは地味な話から始めよう。地味な部分にこそ、たいてい真実が隠れている。ビルドログだ。

コンティニュアンス・トラスト創業者テレン・ヴォスの娘、フィア・ヴォスが、十数のステーションの製造機リストを横断して最安の絹を探してくれるモビ用ツール「スレッドスキャン」を発表したとき、彼女は三つの別々のフィードでこう語った。「全部、自分で書いた」。ENNのパネルでは「夜と週末だけで。誰にも手伝ってもらっていない」とまで言った。

信じたのは、せいぜい四時間だった。それから私は「ルーム」を探しに行った。

ルーム・ウィーブ・プロトコルは、五年前に匿名のメイカー集団「アンライセンスド・ギルド」が公開したニューラル・スクレイピングの設計図だ。無料だ。ずっと無料だった。今夜どこかの公開リレーノードから全仕様を引っ張ってくれば、朝食までに動く価格比較の骨組みが手に入る——実際、私も今週、廃材で組んだ端末でそれをやってみた。スレッドスキャンの公開APIの応答が、ルームの既知の出力パターンと一致するかどうかを確かめるために。

一致した。それも大雑把にではなく、構造的に。同じクエリの畳み込み、同じ三段階の重複排除の癖——ルームの原作者たちが自分たちのリリースノートで「直さなかった、ちょっとした力技」と認めていたあの癖だ。スレッドスキャンにも、その力技がそのまま残っていた。

「夜と週末だけで、誰にも手伝ってもらっていない」という言葉と、月額40クレジットの購読制で核心部分が暗号化された製品のあいだには、どうやらチームが存在する。流出したケレス製造工房の契約者名簿には、「既存のオープンな枠組みを製品化する」ためにNDA付きで雇われたエンジニア十一名の名前があった。アプリにクレジット表記された者は一人もいない。株式を渡された形跡も、私の知る限りない。

慎重に言っておきたいのだが、興味深い問題は「令嬢が一行一行自分で打ち込んだわけではない」ということそのものではない。何かを世に出す人間のほとんどは、そうではないからだ。私自身、公開ラボを運営していて、自分の「設計図」の半分は、肩越しに他人が直してくれたものだ。興味深いのは、奪い取りの方向である。アンライセンスド・ギルドがルームを無料で公開したのは、製造権の予算を持たないフロンティア入植地が自前の比較ツールを作れるようにするためだった。スレッドスキャンはその贈り物を受け取り、静かに雇った労働力で磨き上げ、購読制で包み——さらに、スクレイピングの核心ロジックを暗号化する申請まで出していた。スレッドスキャンがルームにしたことを、誰にもスレッドスキャンに対してできないようにするために。

それは革新ではない。一方通行の弁だ。

ルームの元の仕様と、私自身の比較ツールの実装は、差分ファイルごとラボの公開アーカイブに置いてある。誰でも同じ検証をやり直せる。テープで補修した端末一台で、午後ひとつあれば済んだ作業だ。もともと誰のものでもあったものなら、出ていくときに鍵をかけたところで、設計者になれるわけではない。ただ、最後に部屋を出た人になるだけだ。
