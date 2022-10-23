<h1 align="center">@conken-oss-pkg/tsconfig</h1>

tsconfigルールセットです。将来的には publish 予定です。

## 利用法（モノレポ内）
`tsconfig.json` 内に利用したい `tsconfig` への相対パスを定義することで利用可能です。

```json
{
  "extends": "../tsconfig/configs/library-react-emotion.json",
  "compilerOptions": {
    "baseUrl": ".",
  },
}

```

## ディレクトリ構成

```
packages/tsconfig
 └─ configs
     ├─ ...
     └─ xxx.js
```
