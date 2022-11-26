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
    <MarkableContainer.BASIC marks={marks} onClick={handleClick}>
      <div
        className="relative w-64 h-64 bg-gray-200"
        style={{
          width: "300px",
          height: "300px",
          background: "gray",
        }}
      />
    </MarkableContainer.BASIC>
  );
};
