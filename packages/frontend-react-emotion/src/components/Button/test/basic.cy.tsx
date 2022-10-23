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

type Props = {
  testId: string;
  disabled?: boolean;
  notAllowed?: boolean;
};

const TestComponent = ({
  testId,
  disabled,
  notAllowed,
}: Props): JSX.Element => {
  const [label, setLabel] = useState(TEST_LABEL_FIRST);

  const handleClick = useCallback(() => {
    setLabel(TEST_EVENT_SECOND);
  }, []);

  return (
    <Button.BASIC
      disabled={disabled}
      notAllowed={notAllowed}
      customizableStyle={style}
      onClick={handleClick}
      testId={testId}
    >
      {label}
    </Button.BASIC>
  );
};

it("BasicButton | 表示されてるラベルが正しいことを確認", () => {
  cy.mount(<TestComponent testId={TEST_ID} />);

  const button = cy.getByTestId(TEST_ID);

  button.should("have.text", TEST_LABEL_FIRST);
});

it("BasicButton | クリックイベントが発火されていることを確認", () => {
  cy.mount(<TestComponent testId={TEST_ID} />);

  const button = cy.getByTestId(TEST_ID);

  button.should("have.text", TEST_LABEL_FIRST);
  button.click();
  button.should("have.text", TEST_EVENT_SECOND);
});

const DISABLED_TEST_ID = "disabled-test-mark";
const NOT_ALLOWED_TEST_ID = "not-allowed-test-mark";

const TestComponents = (): JSX.Element => {
  return (
    <div>
      <TestComponent testId={NOT_ALLOWED_TEST_ID} notAllowed />
      <TestComponent testId={DISABLED_TEST_ID} disabled />
    </div>
  );
};

it("BasicButton | クリックコントロールができていることを確認", () => {
  cy.mount(<TestComponents />);

  const disabledButton = cy.getByTestId(DISABLED_TEST_ID);
  disabledButton.should("be.disabled");

  // FIXME: disabled を削除しているのに、クリック時処理がコンポーネント側でバリデーションしなくても発火しない
  disabledButton.invoke("removeAttr", "disabled").click({ force: true });
  disabledButton.should("be.not.disabled");
  disabledButton.should("have.text", TEST_LABEL_FIRST);

  const notAllowedButton = cy.getByTestId(NOT_ALLOWED_TEST_ID);
  notAllowedButton.should("be.disabled");

  // FIXME: disabled を削除しているのに、クリック時処理がコンポーネント側でバリデーションしなくても発火しない
  notAllowedButton.invoke("removeAttr", "disabled").click({ force: true });
  disabledButton.should("not.be.disabled");
  notAllowedButton.should("have.text", TEST_LABEL_FIRST);
});
