import { Button, ButtonStyle } from "../index";

export default {
  title: "Button/Basic",
  component: Button.BASIC,
};

const style: ButtonStyle.BASIC = {
  TEXT: "#fff",
  BACKGROUND: "#000",
  FONT_FAMILY: "sans-serif",
};

export const BasicButton = (): JSX.Element => (
  <Button.BASIC customizableStyle={style}>Hello World</Button.BASIC>
);
