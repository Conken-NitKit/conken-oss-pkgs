<h1 align="center">@conken-oss-pkg/eslint-config</h1>

ESLint ルールセットです。将来的には publish 予定です。

## 利用法（モノレポ内）

`.eslintrc` 内に利用したい `preset` への相対パスを定義することで利用可能です。

```json
{
  "extends": ["../eslint-config/presets/xxx.js"]
}
```

## ディレクトリ構成

```
packages/eslint-config
 |
 ├─ lib/       # シチュエーション毎の eslint の設定
 |   ├─ ...
 │   └─ xxx.js
 |
 └─ presets/   # lib/eslint を組み合わせ使いやすくしたものを提供しています。
     ├─ ...
     └─ xxx.js
```
