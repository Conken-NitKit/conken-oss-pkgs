---
to: <%= abs_path %>/implements/Basic/Basic.tsx
---
import React from "react";
import { <%= camel_case %>Css, Color } from "./Basic.style";

export type Props = {
  color: Color;
  testId?: string;
};

export const Basic = ({
  color,
  testId
}: Props): JSX.Element => {
  return (
    <div
      css={<%= camel_case %>Css(color)}
      data-test-id={testId}
    >
      Hello World
    </div>
  );
};
