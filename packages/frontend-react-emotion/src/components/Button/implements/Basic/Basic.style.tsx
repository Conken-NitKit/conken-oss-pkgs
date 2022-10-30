import { css, SerializedStyles } from "@emotion/react";

export type Style = {
  TEXT: string;
  BACKGROUND: string;
  FONT_FAMILY: string;
};

export const buttonCss = (style: Style): SerializedStyles => css`
  dispaly: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border-radius: 8px;
  font-family: ${style.FONT_FAMILY};
  color: ${style.TEXT};
  border: ${style.TEXT} 1px solid;
  background-color: ${style.BACKGROUND};
  &:hover {
    opacity: 0.7;
  }
`;
