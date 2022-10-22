import { css, SerializedStyles } from "@emotion/react";

export type Color = {
  TEXT: string;
  BACKGROUND: string;
};

const BASIC_FONT_FAMILY = `'ui-sans-serif', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`;

export const buttonCss = (color: Color): SerializedStyles => css`
  dispaly: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 16px;
  font-family: ${BASIC_FONT_FAMILY};
  font-size: 16px;
  border-radius: 8px;
  color: ${color.TEXT};
  border: ${color.TEXT} 1px solid;
  background-color: ${color.BACKGROUND};
  &:hover {
    opacity: 0.7;
  }
`;
