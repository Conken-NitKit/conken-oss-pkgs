import { css, SerializedStyles } from "@emotion/react";

export type Color = {
  TEXT: string;
  BACKGROUND: string;
};

export const buttonCss = (color: Color): SerializedStyles => css`
  dispaly: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border-radius: 8px;
  color: ${color.TEXT};
  border: ${color.TEXT} 1px solid;
  background-color: ${color.BACKGROUND};
  &:hover {
    opacity: 0.7;
  }
`;
