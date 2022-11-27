import { ClickPositionEvent } from "./common/hooks/useClickPosition";
import { Mark as IMark } from "./common/types/Mark";
import { BasicMarkableContainer } from "./implements/Basic";

export namespace MarkableContainer {
  export type Mark = IMark;
  export type ClickEvent = ClickPositionEvent;
  export const BASIC = BasicMarkableContainer;
}
