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

以下のコマンドを実行することで、コンポーネント用のファイ群を自動で生成できます。<br>
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

コンポーネント名を入力すると以下のファイル群が一気に生成されます。<br>
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

作成したコンポーネントは [StoryBook](https://storybook.js.org/) で動作確認できます。<br>
StoryBook の起動には以下のコマン実行したのち、[http://localhost:9009/](http://localhost:9009/) にアクセスすることで起動可能です。

```sh
npm run storybook -w @conken-oss-pkg/frontend-react-emotion
```

### StoryBook 用のファイルの記載方法

StoryBook 用のコードは `packages/frontend-react-emotion/src/components/{コンポーネント名}/stories/{タイプ名}.stories.tsx` に記載します。

```tsx
// Note: Storybookに表示させたいButtonコンポーネントをimport
// Note: 利用時と同じ形でコンポーネントの動作確認をしたいので、コンポーネントは以下の index.ts からインポートしてください）
import { Component, ComponentStyle } from "../index";

export default {
  title: "Button/Basic", // Storybookの左側のサイドバーに表示したいディレクトリ・ファイル名
  component: Component.BASIC, // 対象のコンポーネントを指定
};

// 動作確認用のスタイルの定義を行なっています。
const style: ComponentStyle.BASIC = {
  TEXT: "#fff",
  BACKGROUND: "#000",
  FONT_FAMILY: "sans-serif",
};

// 実際に表示するコンポーネントの定義をします。
export const BasicComponent = (): JSX.Element => (
  <Component.BASIC customizableStyle={style}>Hello World</Component.BASIC>
);
```

## 自動テスト

作成したコンポーネントの Unit テストは [Cypress](https://docs.cypress.io/guides/component-testing/testing-react#Selecting-the-Stepper-Component) で行なっています。<br>
Unit テストについて: [ユニットテストってどんなもの？](https://rightcode.co.jp/blog/information-technology/what-unit-test-syain)

テストの実行は以下のコマンドで可能です。

```sh
# 全てのパッケージの自動テストを実行
npm run test

# @conken-oss-pkg/frontend-react-emotion に絞って、自動テストを実行
npm run test -w @conken-oss-pkg/frontend-react-emotion
```

### テストコードの書き方

テストコードは `packages/frontend-react-emotion/src/components/{コンポーネント名}/test/{タイプ名}.cy.tsx` に記載します。

あくまで一例です。テスト項目はコンポーネントによって、変更してください。

```tsx
import { useCallback, useState } from "react";

// Note: 自動テストしたいButtonコンポーネントをimport
// Note: 利用時と同じ形でコンポーネントの動作確認をしたいので、コンポーネントは以下の index.ts からインポートしてください）
import { Button, ButtonStyle } from "../index";

const TEST_ID = "test-mark";
const TEST_LABEL_FIRST = "not clicked";
const TEST_EVENT_SECOND = "clicked!!";

const style: ButtonStyle.BASIC = {
  TEXT: "#fff",
  BACKGROUND: "#000",
  FONT_FAMILY: "sans-serif",
};

// 動作確認用のコンポーネントを定義しています。
const TestComponent = (): JSX.Element => {
  const [label, setLabel] = useState(TEST_LABEL_FIRST);

  const handleClick = useCallback(() => {
    setLabel(TEST_EVENT_SECOND);
  }, []);

  return (
    <Button.BASIC
      customizableStyle={style}
      onClick={handleClick}
      testId={TEST_ID}
    >
      {label}
    </Button.BASIC>
  );
};

// Note: it関数の第一引数には実行するテストの概要を記載します。
it("BasicButton | 表示されてるラベルが正しいことを確認", () => {
  cy.mount(<TestComponent />); // Unitテスト実行環境の html にコンポーネント表示しています。

  const button = cy.getByTestId(TEST_ID); // 引数で受け取った TestId を持つコンポーネントを取得して定数に格納しています。
  button.should("have.text", TEST_LABEL_FIRST); // 表示中のコンポーネント内のテキストが引数で受け取ったものと一緒かを確認します。
});

it("BasicButton | クリックイベントが発火されていることを確認", () => {
  cy.mount(<TestComponent />);

  const button = cy.getByTestId(TEST_ID);

  button.should("have.text", TEST_LABEL_FIRST);
  button.click(); // テスト対象の要素をクリック
  button.should("have.text", TEST_EVENT_SECOND); // 引数で受け取った TestId を持つコンポーネントを取得して定数に格納しています。
});
```

## ライブラリの導入

このワークスペースに新しくライブラリを導入する場合はワークスペースとして `@conken-oss-pkg/frontend-react-emotion` を指定してください。

```sh
npm i sample-library -w @conken-oss-pkg/frontend-react-emotion
```
