import { mount } from "@cypress/react";
import React, { useCallback } from "react";

import { Button, ButtonStyle } from "../index";

const TEST_ID = "test-mark";
const TEST_LABEL = "Hello World";
const TEST_EVENT_LOG = "clicked!!";

const style: ButtonStyle.BASIC = {
  TEXT: "#fff",
  BACKGROUND: "#000",
  FONT_FAMILY: "sans-serif",
};

const TestComponent = (): JSX.Element => {
  const handleClick = useCallback(() => {
    console.log(TEST_EVENT_LOG);
  }, []);

  return (
    <Button.BASIC customizableStyle={style} onClick={handleClick} testId={TEST_ID}>
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
