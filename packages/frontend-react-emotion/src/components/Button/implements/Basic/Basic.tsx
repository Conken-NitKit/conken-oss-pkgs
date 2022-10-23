import type * as CSS from "csstype";
import { useMemo, PropsWithChildren, useCallback } from "react";
import { buttonCss, Style } from "./Basic.style";

export type Props = {
  customizableStyle: Style;
  disabled?: boolean;
  notAllowed?: boolean;
  testId?: string;
  onClick?: VoidFunction;
};

export const Basic = ({
  children,
  customizableStyle,
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

  // Note: htmlのdisabled属性は、devtoolで変更可能なので、より堅牢にするために、js側でも制御する。
  const handleClick = useCallback(() => {
    if (disabled || notAllowed) {
      return;
    }
    onClick?.();
  }, [disabled, notAllowed, onClick]);

  return (
    <button
      style={{ cursor }}
      css={buttonCss(customizableStyle)}
      disabled={disabled || notAllowed}
      data-test-id={testId}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
