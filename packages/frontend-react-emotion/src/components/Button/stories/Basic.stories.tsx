import React from "react";
import { Button, ButtonColor } from "../index";

export default {
  title: "Button/Basic",
  component: Button.BASIC,
};

const color: ButtonColor.BASIC = {
  TEXT: "#fff",
  BACKGROUND: "#000",
};

export const BasicButton = () => (
  <Button.BASIC color={color}>Hello World</Button.BASIC>
);
