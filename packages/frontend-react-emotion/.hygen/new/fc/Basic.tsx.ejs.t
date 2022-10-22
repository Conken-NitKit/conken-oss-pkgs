---
to: <%= abs_path %>/implements/Basic/Basic.tsx
---
import React from "react";
import { <%= camel_case %>Css, Style } from "./Basic.style";

export type Props = {
  customizableStyle: Style;
  testId?: string;
};

export const Basic = ({
  customizableStyle,
  testId
}: Props): JSX.Element => {
  return (
    <div
      css={<%= camel_case %>Css(customizableStyle)}
      data-test-id={testId}
    >
      Hello World
    </div>
  );
};
