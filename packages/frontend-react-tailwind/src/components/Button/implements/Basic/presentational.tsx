import { forwardRef, PropsWithChildren } from "react";
import { Mark } from "../../common/types/Mark";

const Marker = ({ mark }: { mark: Mark }) => {
  return (
    <div
      id={mark.id}
      className="absolute bg-red-500 rounded-full w-4 h-4"
      style={{
        left: `${mark.x * 100}%`,
        top: `${mark.y * 100}%`,
      }}
    />
  );
};

type Props = PropsWithChildren<{
  className?: string;
  marks: Mark[];
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}>;

export const MarkableComponent = forwardRef<HTMLDivElement, Props>(
  function Component({ className, marks, children, onClick }, ref) {
    return (
      <div ref={ref} className={className} onClick={onClick}>
        {children}
        {marks.map((mark) => (
          <Marker key={mark.id} mark={mark} />
        ))}
      </div>
    );
  }
);
