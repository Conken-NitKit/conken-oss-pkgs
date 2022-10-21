---
to: <%= abs_path %>/stories/Basic.stories.tsx
---
import React from "react";
import { <%= pascal_case %>, <%= pascal_case %>Color } from "../index";

export default {
  title: "<%= pascal_case %>/Basic",
  component: <%= pascal_case %>.BASIC,
};

const color: <%= pascal_case %>Color.BASIC = {
  TEXT: "#fff",
  BACKGROUND: "#000",
};

export const Basic<%= pascal_case %> = () => (
  <<%= pascal_case %>.BASIC color={color} />
);
