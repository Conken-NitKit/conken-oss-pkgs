# unwheel-pkgs

## コミットルール

このプロジェクトではコミットメッセージの品質統一のため、[commitlint](https://github.com/conventional-changelog/commitlint/) を使用しています。<br>
commitlint のルールではコミットメッセージが次の形式になっている必要があります。

```
type(scope): description [flags]

コミットメッセージ例
feat(base): develop new feature
fix(frontend-react-next): fix some bugs
chore(all): ciの設定
```

#### type について

type には次の 11 種類を入力することが出来ます。

```
- build: ビルドに関すること
- chore: カテゴライズできない雑事
- ci: ciに関すること
- docs: ドキュメント編集など
- feat: 新機能開発
- fix: バグフィックス
- perf: パフォーマンス向上
- refactor: リファクタリング
- revert: コミット取り消し
- style: コードスタイルに関すること
- test: テストに関すること
```

#### scope について

scope には「`変更した packages 配下の package 名` or `all`」を指定してください。

#### description について

文章の先頭に大文字のアルファベットを利用しないでください。

#### その他のルールについて

その他のルールはこちらをご覧ください。<br>
https://www.npmjs.com/package/@commitlint/config-conventional
