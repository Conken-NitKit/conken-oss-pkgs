---
to: <%= abs_path %>/index.ts
---
import { Basic, BasicProps, BasicStyle } from "./implements/Basic";

export const <%= pascal_case %> = {
  BASIC: Basic,
};

export namespace <%= pascal_case %>Props {
  export type Basic = BasicProps;
}

export namespace <%= pascal_case %>Style {
  export type BASIC = BasicStyle;
};
