---
to: <%= abs_path %>/README.md
---
# <%= pascal_case %>

## タイプ
| タイプ | 説明 |
| :-: | :-- |
| BASIC | TODO: タイプの特徴を記載してください。 |

## 利用例
利用例は以下のような形です。

### Basic

```tsx
import { useCallback } from "react";
import { <%= pascal_case %>, <%= pascal_case %>Style } from "@unwheel-pkg/frontend-react-emotion";

const style: <%= pascal_case %>Style.BASIC = {
  TEXT: "#fff",
  BACKGROUND: "#000",
  FONT_FAMILY: "sans-serif",
};

export type Props = {
  label: string;
};

export const My<%= pascal_case %> = ({ label }: Props): JSX.Element => {
  return (
    <<%= pascal_case %>.BASIC customizableStyle={style}>
      {label}
    </<%= pascal_case %>.BASIC>
  );
};
```
