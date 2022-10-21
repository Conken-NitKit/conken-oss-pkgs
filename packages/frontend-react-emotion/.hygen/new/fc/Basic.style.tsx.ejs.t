---
to: <%= abs_path %>/implements/Basic/Basic.style.tsx
---
import { css } from "@emotion/react";

export type Color = {
  TEXT: string;
  BACKGROUND: string;
};

export const <%= camel_case %>Css = (color: Color) => css`
  color: ${color.TEXT};
  background-color: ${color.BACKGROUND};
`;
