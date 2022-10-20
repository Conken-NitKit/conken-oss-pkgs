---
to: <%= abs_path %>/stories/Basic.stories.tsx
---
import React from "react";
import { <%= component_name %> } from "../index";

export default {
  title: "<%= component_name %>/Basic",
  component: <%= component_name %>.BASIC,
};

export const Basic<%= component_name %> = () => <<%= component_name %>.BASIC />;
