import type * as CSS from "csstype";
import React, { useMemo, PropsWithChildren } from "react";
import { buttonCss, Color } from "./Basic.style";

export type Props = {
  color: Color;
  disabled?: boolean;
  notAllowed?: boolean;
  testId?: string;
  onClick?: VoidFunction;
};

export const Basic = ({
  children,
  color,
  disabled = false,
  notAllowed = false,
  testId,
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
      data-test-id={testId}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
