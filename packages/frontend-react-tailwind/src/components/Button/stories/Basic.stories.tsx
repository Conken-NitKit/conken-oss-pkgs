import { useCallback, useState } from "react";
import { MarkableContainer } from "../index";

export default {
  title: "MarkableContainer/Basic",
  component: MarkableContainer.BASIC,
};

export const BasicMarkableContainer = (): JSX.Element => {
  const [marks, setMarks] = useState<MarkableContainer.Mark[]>([]);

  const handleClick = useCallback(({ x, y }: MarkableContainer.ClickEvent) => {
    setMarks((prev) => [
      ...prev,
      {
        id: prev.length.toString(),
        x,
        y,
      },
    ]);
  }, []);

  return (
    <MarkableContainer.BASIC
      marks={marks}
      className="relative w-96 h-96"
      onClick={handleClick}
    >
      <div className="relative inset-0 bg-gray-200" />
    </MarkableContainer.BASIC>
  );
};
