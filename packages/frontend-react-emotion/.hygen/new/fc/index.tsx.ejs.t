---
to: <%= abs_path %>/index.ts
---
import { Basic, BasicColor } from "./implements/Basic";

export const <%= pascal_case %> = {
  BASIC: Basic,
};

export namespace <%= pascal_case %>Color {
  export type BASIC = BasicColor;
};
