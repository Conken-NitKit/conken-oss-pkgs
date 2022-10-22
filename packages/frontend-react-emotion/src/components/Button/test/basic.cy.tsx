import { mount } from "@cypress/react";
import React, { useCallback } from "react";

import { Button, ButtonColor } from "../index";

const TEST_ID = "test-mark";
const TEST_LABEL = "Hello World";
const TEST_EVENT_LOG = "clicked!!";

const color: ButtonColor.BASIC = {
  TEXT: "#fff",
  BACKGROUND: "#000",
};

const TestComponent = (): JSX.Element => {
  const handleClick = useCallback(() => {
    console.log(TEST_EVENT_LOG);
  }, []);

  return (
    <Button.BASIC color={color} onClick={handleClick} testId={TEST_ID}>
      {TEST_LABEL}
    </Button.BASIC>
  );
};

it("BasicButton", () => {
  mount(<TestComponent />);

  const button = cy.getByTestId(TEST_ID);

  button.contains(TEST_LABEL);

  button.click();
  cy.log(TEST_EVENT_LOG);
});
