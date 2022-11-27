import { useCallback, useRef } from "react";

export type ClickPositionEvent = {
  event: React.MouseEvent<HTMLDivElement>;
  x: number;
  y: number;
};

export const useClickPosition = (
  clickHandler: (event: ClickPositionEvent) => void
) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const container = containerRef.current;
      if (!container) {
        return;
      }
      const percentX =
        (event.clientX - container.offsetLeft) / container.offsetWidth;

      const percentY =
        (event.clientY - container.offsetTop) / container.offsetHeight;

      clickHandler({ event, x: percentX, y: percentY });
    },
    [clickHandler]
  );

  return {
    containerRef,
    handleClick,
  };
};
