---
to: <%= abs_path %>/stories/Basic.stories.tsx
---
import React from "react";
import { <%= pascal_case %>, <%= pascal_case %>Style } from "../index";

export default {
  title: "<%= pascal_case %>/Basic",
  component: <%= pascal_case %>.BASIC,
};

const style: <%= pascal_case %>Style.BASIC = {
  TEXT: "#fff",
  BACKGROUND: "#000",
  FONT_FAMILY: "sans-serif",
};

export const Basic<%= pascal_case %> = (): JSX.Element => (
  <<%= pascal_case %>.BASIC customizableStyle={style} />
);
