<h1 align="center">frontend-react-emotion</h1>

## ディレクトリ構成

```
packages/frontend-react-emotion
 |
 ├─ .hygen/new/
 |   ├─ ...
 │   └─ fc/
 │       ├─ index.js                    # 自動生成時の対話形式の設定を行なっています。
 │       └─ xxx.tsx.ejs.t               # 生成するファイルの雛形の定義をここで行なっています。
 |
 ├─ .storybook/
 |   └─ main.js                         # storybook 用の設定を行なっています。
 |
 ├─ cypress/support/
 |   ├─ commands/                       # Cypress に独自の関数を追加する処理を行います。
 |   |   └─ xxx.ts
 |   ├─ component-index.html            # Unitテスト実行環境の html を定義しています。
 |   └─ component                       # Cypress の名前空間に実行したいテストの型定義を行います。
 |
 ├─ src/
 |   ├─ component/
 |   |   ├─ ...
 |   |   └─ Example/                    # コンポーネント名
 |   |       ├─ common/                 # このコンポーネントで共通で使われる 定数・機能・型 を定義
 |   |       |   |
 |   |       |   ├─ constants/          # 定数
 |   |       |   |   ├─ ...
 |   |       |   |   └─ xxx.ts
 |   |       |   |
 |   |       |   ├─ hooks/              # カスタムHooks
 |   |       |   |   ├─ ...
 |   |       |   |   └─ useXxx.ts
 |   |       |   |
 |   |       |   ├─ types/              # 型定義
 |   |       |   |   ├─ ...
 |   |       |   |   └─ Xxx.ts
 |   |       |   |
 |   |       |   └─ utils/              # Util関数
 |   |       |       ├─ ...
 |   |       |       └─ function.ts
 |   |       |
 |   |       ├─ implements/             # コンポーネントの実装を定義
 |   |       |   ├─ ...
 |   |       |   └─ Basic/              # タイプ名
 |   |       |       ├─ Basic.hooks.ts  # このタイプのコンポーネントのみ使うカスタムHooksの定義を行う。
 |   |       |       ├─ Basic.style.ts  # emotionなどのスタイルの定義を行う。
 |   |       |       ├─ Basic.tsx       # コンポーネント自体の実装を行う。
 |   |       |       ├─ Basic.util.ts   # このタイプのコンポーネントのみ使うUtil関数の定義を行う
 |   |       |       └─ index.ts        # エクスポートを行う。
 |   |       |
 |   |       ├─ stories/                # ストーリーブック用の実装を定義を行う。
 |   |       |   ├─ ...
 |   |       |   └─ Basic.stories.tsx   # 各タイプのストーリブック用の実装を定義を行う。
 |   |       |
 |   |       ├─ test/                   # テストコード
 |   |       |   ├─ ...
 |   |       |   └─ Basic.cy.tsx        # Cypress 用のテストコードの実装を行う。
 |   |       |
 |   |       ├─ index.ts                # エクスポートを行う。
 |   |       |
 |   |       └─ README.md               # コンポーネントに関する説明を記載します。
 |   |
 |   └─ utils/                          # コンポーネント用のUtil関数の定義を行う。
 |                                      # (コンポーネントに依存しないUtil関数は別のライブラリに実装)
 |
 ...
```

## セットアップ

```sh
npm ci
```

## コンポーネントの雛形の自動生成

以下のコマンドを実行することで、コンポーネント用のファイ群を自動で生成できます。
このコマンドを実行すると「コンポーネント名」の入力を要求されます。

```sh
npm run new:fc -w @conken-oss-pkg/frontend-react-emotion
```

```sh
$ npm run new:fc -w @conken-oss-pkg/frontend-react-emotion

> @conken-oss-pkg/frontend-react-emotion@0.0.0 new:fc
> hygen new fc

? What is the component name? ›
```

コンポーネント名を入力すると以下のファイル群が一気に生成されます。
生成ファイルの各役割については上のディレクトリ構成から確認してください。

```sh
✔ What is the component name? · Button

Loaded templates: hygen
       added: packages/frontend-react-emotion/src/components/Button/implements/Basic/Basic.style.tsx
       added: packages/frontend-react-emotion/src/components/Button/implements/Basic/Basic.tsx
       added: packages/frontend-react-emotion/src/components/Button/implements/Basic/inex.ts
       added: packages/frontend-react-emotion/src/components/Button/stories/Basic.stories.tsx
       added: packages/frontend-react-emotion/src/components/Button/test/Basic.cy.tsx
       added: packages/frontend-react-emotion/src/components/Button/index.ts
       added: packages/frontend-react-emotion/src/components/Button/README.md
```

## 作成したコンポーネントの動作確認

作成したコンポーネントは [StoryBook](https://storybook.js.org/) で動作確認できます。
StoryBook の起動には以下のコマン実行したのち、[http://localhost:9009/](http://localhost:9009/) にアクセスすることで起動可能です。

```sh
npm run storybook -w @conken-oss-pkg/frontend-react-emotion
```

### StoryBook

## テストコード

- [公式ドキュメント](https://docs.cypress.io/guides/component-testing/testing-react#Selecting-the-Stepper-Component)

## ライブラリの導入

このワークスペースに新しくライブラリを導入する場合はワークスペースとして `@conken-oss-pkg/frontend-react-emotion` を指定してください。

```sh
npm i sample-library -w @conken-oss-pkg/frontend-react-emotion
```
