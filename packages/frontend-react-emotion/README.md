<h1 align="center">@unwheel-pkg/frontend-react-emotion</h1>

## リンク

- [開発者ガイド](/packages/frontend-react-emotion/README_DEVELOPERS.md)

## インストール

### npm:

```sh
npm install @unwheel-pkg/frontend-react-emotion
```

### yarn:

```sh
yarn add @unwheel-pkg/frontend-react-emotion
```

### 利用方法

このライブラリで提供されるコンポーネントはコンポーネント名とタイプの組合わせることで使いたい

- コンポーネント名 (`Button`, `Calendar` などのどんな部品なのかを指定します)
- タイプ (`Basic`, `Pop` などのどんなデザインなのかを指定します)

```tsx
<コンポーネント名.タイプ>XXX</コンポーネント名.タイプ>
```

また、各コンポーネントは変更可能なスタイルをオブジェクトとして受け取ることでカスタマイズ可能です。<br>
このオブジェクトの方もコンポーネント同様に `{コンポーネント名}Style.{タイプ}` というように指定する子利用可能です。

```tsx
const style: ComponentStyle.BASIC = {
  TEXT: "#fff",
  BACKGROUND: "#000",
  FONT_FAMILY: "sans-serif",
};

export const MyComponent = (): JSX.Element => {
  return <Component.BASIC customizableStyle={style} />;
};
```

実際の利用例は以下のような形です。

```tsx
import { useCallback } from "react";
import { Button, ButtonStyle } from "@unwheel-pkg/frontend-react-emotion";

const style: ButtonStyle.BASIC = {
  TEXT: "#fff",
  BACKGROUND: "#000",
  FONT_FAMILY: "sans-serif",
};

export type Props = {
  label: string;
};

export const MyButton = ({ label }: Props): JSX.Element => {
  const handleClick = useCallback(() => {
    console.log("clicked!!");
  }, []);

  return (
    <Button.BASIC customizableStyle={style} onClick={handleClick}>
      {label}
    </Button.BASIC>
  );
};
```
