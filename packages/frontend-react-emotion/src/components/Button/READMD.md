# Button

## タイプ

| タイプ | 説明                                 |
| :----: | :----------------------------------- |
| BASIC  | ホバーするとボタンが僅かに透過します |

## 利用例

利用例は以下のような形です。

### Basic

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
  return <Button.BASIC customizableStyle={style}>{label}</Button.BASIC>;
};
```
