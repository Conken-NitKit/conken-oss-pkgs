import { useCallback, useState } from "react";

import { Button, ButtonStyle } from "../index";

const TEST_ID = "test-mark";
const TEST_LABEL_FIRST = "not clicked";
const TEST_EVENT_SECOND = "clicked!!";

const style: ButtonStyle.BASIC = {
  TEXT: "#fff",
  BACKGROUND: "#000",
  FONT_FAMILY: "sans-serif",
};

const TestComponent = (): JSX.Element => {
  const [label, setLabel] = useState(TEST_LABEL_FIRST);

  const handleClick = useCallback(() => {
    setLabel(TEST_EVENT_SECOND);
  }, []);

  return (
    <Button.BASIC
      customizableStyle={style}
      onClick={handleClick}
      testId={TEST_ID}
    >
      {label}
    </Button.BASIC>
  );
};

it("BasicButton | 表示されてるラベルが正しいことを確認", () => {
  cy.mount(<TestComponent />);

  const button = cy.getByTestId(TEST_ID);

  button.should("have.text", TEST_LABEL_FIRST);
});

it("BasicButton | クリックイベントが発火されていることを確認", () => {
  cy.mount(<TestComponent />);

  const button = cy.getByTestId(TEST_ID);

  button.should("have.text", TEST_LABEL_FIRST);
  button.click();
  button.should("have.text", TEST_EVENT_SECOND);
});
