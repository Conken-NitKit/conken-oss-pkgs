import type * as CSS from "csstype";
import React, { useMemo, PropsWithChildren } from "react";
import { buttonCss, Color } from "./Basic.style";

export type Props = {
  color: Color;
  disabled?: boolean;
  notAllowed?: boolean;
  onClick?: VoidFunction;
};

export const Basic = ({
  children,
  color,
  disabled = false,
  notAllowed = false,
  onClick,
}: PropsWithChildren<Props>): JSX.Element => {
  const cursor = useMemo<CSS.Property.Cursor>(() => {
    if (notAllowed) {
      return "not-allowed";
    }
    if (disabled) {
      return "none";
    }
    return "pointer";
  }, [disabled, notAllowed]);

  return (
    <button
      style={{ cursor }}
      css={buttonCss(color)}
      disabled={disabled || notAllowed}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
