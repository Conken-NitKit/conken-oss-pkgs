---
to: <%= abs_path %>/test/Basic.cy.tsx
---
import { mount } from "@cypress/react";

import { <%= pascal_case %>, <%= pascal_case %>Style } from "../index";

const TEST_ID = "test-mark";
const TEST_LABEL = "Hello World";

const style: <%= pascal_case %>Style.BASIC = {
  TEXT: "#fff",
  BACKGROUND: "#000",
  FONT_FAMILY: "sans-serif",
};

const TestComponent = (): JSX.Element => {
  return (
    <<%= pascal_case %>.BASIC customizableStyle={style} testId={TEST_ID} />
  );
};

it("Basic<%= pascal_case %> | 表示されてるラベルが正しいことを確認", () => {
  mount(<TestComponent />);

  const <%= camel_case %> = cy.getByTestId(TEST_ID);

  <%= camel_case %>.contains(TEST_LABEL);
});
