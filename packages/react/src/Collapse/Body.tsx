import React from "react";
import { getComponentClassName } from "../Form/core";

export type BodyProps = {
  children: React.ReactNode;
  isOpen?: boolean;
  id?: string;
  ariaLabelledby?: string;
  className?: string;
  classModifier?: string;
};

export const Body = ({
  children,
  isOpen = false,
  className = "af-accordion__collapse",
  classModifier,
  ariaLabelledby,
  id,
}: BodyProps) => {
  const panel = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (panel && panel.current) {
      panel.current.style.maxHeight = isOpen ? "100%" : "0";
    }
  }, [isOpen]);

  let newClassModifier = isOpen ? "open" : "close";
  if (classModifier) {
    newClassModifier = `${newClassModifier} ${classModifier}`;
  }

  const componentClassName = getComponentClassName(className, newClassModifier);

  return (
    <div
      className={componentClassName}
      role="tabpanel"
      aria-labelledby={ariaLabelledby}
      id={id}
      ref={panel}
    >
      <div className="af-accordion__block">{children}</div>
    </div>
  );
};
