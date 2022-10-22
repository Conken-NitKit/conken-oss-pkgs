---
to: <%= abs_path %>/test/Basic.test.tsx
---
import React from "react";
import { mount } from "@cypress/react";

import { <%= pascal_case %>, <%= pascal_case %>Color } from "../index";
import { getSelectorByTestId } from "../../../utils/test";

const TEST_ID = "test-mark";
const TEST_LABEL = "Hello World";

const color: <%= pascal_case %>Color.BASIC = {
  TEXT: "#fff",
  BACKGROUND: "#000",
};

const TestComponent = (): JSX.Element => {
  return (
    <<%= pascal_case %>.BASIC color={color} testId={TEST_ID} />
  );
};

it("Basic<%= pascal_case %>", () => {
  mount(<TestComponent />);

  const selector = getSelectorByTestId(TEST_ID);
  const button = cy.get(selector);

  button.contains(TEST_LABEL);
});
