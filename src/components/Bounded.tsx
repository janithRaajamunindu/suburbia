import { CSSProperties, ElementType } from "react";
import clsx from "clsx";

type BoundedProps<T extends ElementType = ElementType> =
  React.ComponentPropsWithRef<T> & {
    as?: T;
    className?: string;
    style?: CSSProperties;
    children: React.ReactNode;
  };

export function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps<ElementType>) {
  return (
    <Comp
      className={clsx(
        "px-6 ~py-10/16 [.header+&]:pt-44 [.header+&]:md:pt-32",
        className
      )}
      {...restProps}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
}
