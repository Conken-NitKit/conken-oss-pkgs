import { PropsWithChildren } from "react";
import {
  ClickPositionEvent,
  useClickPosition,
} from "../../common/hooks/useClickPosition";
import { Mark } from "../../common/types/Mark";
import { MarkableComponent } from "./presentational";

type Props = PropsWithChildren<{
  marks: Mark[];
  className?: string;
  onClick: (event: ClickPositionEvent) => void;
}>;

export const MarkableContainer = ({ children, onClick, ...rest }: Props) => {
  const { containerRef, handleClick } = useClickPosition(onClick);

  return (
    <MarkableComponent ref={containerRef} {...rest} onClick={handleClick}>
      {children}
    </MarkableComponent>
  );
};
