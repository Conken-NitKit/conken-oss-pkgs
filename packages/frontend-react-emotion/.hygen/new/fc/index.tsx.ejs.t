---
to: <%= abs_path %>/index.ts
---
import { Basic } from "./implements/Basic";

// Note: key には全部大文字のスネークケースにする
export const <%= component_name %> = {
  BASIC: Basic,
};
