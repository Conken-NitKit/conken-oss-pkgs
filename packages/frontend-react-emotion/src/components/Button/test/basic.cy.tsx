import React, { useCallback } from "react";
import { mount } from "@cypress/react";

import { Button, ButtonColor } from "../index";
import { getKeyByTestId } from "../../../utils/test";

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
    <Button.BASIC
      color={color}
      onClick={handleClick}
      testId={TEST_ID}
    >
      {TEST_LABEL}
    </Button.BASIC>
  );
};

it("BasicButton", () => {
  mount(<TestComponent />);
  
  const key = getKeyByTestId(TEST_ID);
  const button = cy.get(key);

  button.contains(TEST_LABEL);
  button.click();

  cy.log(TEST_EVENT_LOG);
});
