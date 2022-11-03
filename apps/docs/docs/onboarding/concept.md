---
slug: concept
position: 1
authors: [kubo_programmer]
---

# 開発コンセプト

## プロジェクトの目的

本ライブラリは「ハッカソンなどの短期開発で作ったものを恒久的な資産にする」という目的でライブラリ開発を行います。

想定される利用組織では「3 日~1 ヶ月」の開発期間を設けて、新規プロダクトを作るケースが多いです。

このような開発を繰り返している結果、以下のような問題が発生していると考えています。

- 新規プロダクトの開発を行うたびに同様の処理を実装している（車輪の再発明）
- 過去に実装したコード量は多いのに、それらのコードの寿命が短く、「資産」と呼べるレベルのコードが存在しない。
- コードの良し悪しによる、サービスの開発体験への影響を直接体験する機会を失っている。

これらの問題により、組織の開発効率が「メンバー個人の開発能力に依存している」という状態があると考えています。

本ライブラリを開発する（開発したコードを資産化する）ことで、
これまで個人の開発能力に依存していたチーム全体の開発能力をライブラリの成長度合いに依存させることで、
メンバーの新陳代謝が発生した場合も継続的な成長を行う状態を目指します。

## 理想状態

### 積み上げ式の開発スタイル

本システムを利用するチームは「3 日~1 ヶ月」という短い開発期間でサービスのリリースを行います。<br/>
これは、企業などの大きな組織が実際にプロダクトを作る場合の期間と比較するとかなり短いものです。

このような状況において、フルスクラッチ型の開発をしていくと、
どれだけ各メンバーが技術力を向上させても、きちんとした組織に匹敵するクオリティのサービスを開発することはできません。

「開発したコードを資産化する」ことができれば、サービスをリリースするたびに、ライブラリの機能が増えていきます。

これにより、サービスのリリースを繰り返すたびに、徐々に完成するサービスの速度・クオリティが向上していき、やがては他の組織に匹敵するようなサービスの開発も現実的なものとなります。

このような開発スタイルを **「積み上げ式」** と定義し、この状態を理想の状態とします。

## 理想状態を実現するために

理想状態を実現するには「簡単に拡張できる」「簡単に再利用できる」ような状態を目指します。

この状態を実現するには

- 各サービスで使われる機能が、1 つの場所に共存できるパッケージ構成およびディレクトリ構成
- 各機能が、さまざまなユースケースで使いやすいように豊富なオプションを持っていること
- パッケージの導入の導入が容易であること

が求められます。

これを実現するための工夫は各ライブラリで解説します。

## 副次的な恩恵

### 1. サービス案なしでタスクを用意することが可能

現在の育成サポート体制は整備されており、今後も TypeScript を使って開発を行うエンジニアが多く生まれることが見込まれています。
最終的には 20~30 人ほどの体制で複数のプロジェクトの開発を進めることが考えられます。

それに対して、サービスの企画数やプログミングコンテストは 10 名前後の現状でも十分に多いとは言えない状態です。
今後も組織が成長を続けた場合に「開発をしたいが、やることがない/やりたいと思うことがない」という状態に陥るメンバーが多く生まれることが予想されます。

そこに「チームで運用するライブラリ」があれば、作りたいサービス案がなくとも、常に開発して欲しいタスクが存在する状態を作り出すことができます。

### 2. 保守性・拡張性を意識した「実装/設計」の能力が身に付く。

「短期サービス」の開発では、良いコードの恩恵、悪いコードによる損害を身を持って体験することは困難です。

本ライブラリ開発は長期的な運用を想定されるため、
コードの良し悪しによる開発体験への影響を直接感じることができ、
高品質なコードがどういうものかを意識して書く習慣が身につくと考えています。

また、大規模かつ十分に設計されたコードの構成を参考にすることで技術力の向上につながるとも考えています。