---
to: <%= abs_path %>/implements/Basic/Basic.style.tsx
---
import { css } from "@emotion/react";

export type Style = {
  TEXT: string;
  BACKGROUND: string;
  FONT_FAMILY: string;
};

export const <%= camel_case %>Css = (style: Style) => css`
  color: ${style.TEXT};
  background-color: ${style.BACKGROUND};
  font-family: ${style.FONT_FAMILY};
`;
