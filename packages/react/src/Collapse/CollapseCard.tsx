import React, { useId, useMemo } from "react";
import { Body, BodyProps } from "./Body";
import { Header, HeaderProps, HeaderToggleElement } from "./Header";
import { getComponentClassName } from "../Form/core";

export type CollapseProps = {
  className?: string;
  classModifier?: string;
  isOpen?: boolean;
  children?: React.ReactNode[];
  index?: number;
  onToggle?: (element: HeaderToggleElement) => void;
};

const CollapseCard = ({
  className = "af-accordion__item",
  classModifier,
  isOpen = false,
  children,
  index = 0,
  onToggle,
}: CollapseProps) => {
  const id = useId();
  const headerId = useMemo(() => id, [id]);
  const [open, setOpen] = React.useState(isOpen);

  React.useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  const handleToggle = (e: HeaderToggleElement) => {
    if (onToggle) {
      onToggle(e);
    }
    setOpen(!open);
  };

  const renderChild = (child: React.ReactElement<HeaderProps | BodyProps>) => {
    const bodyId = `${headerId}body`;
    switch (child.type) {
      case Header:
        return React.cloneElement(child, {
          isOpen: open,
          onToggle: (e: HeaderToggleElement) => handleToggle(e),
          classModifier,
          id: headerId,
          index,
          href: `#${bodyId}`,
          ariaControls: bodyId,
          key: index,
        });
      case Body:
        return React.cloneElement(child, {
          isOpen: open,
          classModifier,
          ariaLabelledby: headerId,
          id: bodyId,
          key: bodyId,
        });
      default:
        return child;
    }
  };

  let newClassModifier = open ? "open" : "";
  newClassModifier = classModifier
    ? `${newClassModifier} ${classModifier}`
    : `${newClassModifier}`;

  const componentClassName = getComponentClassName(className, newClassModifier);

  return (
    <div className={componentClassName} key={index}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement<HeaderProps | BodyProps>(child)) {
          return renderChild(child);
        }
        return child; // or handle invalid children in any other way
      })}
    </div>
  );
};
CollapseCard.Body = Body;
CollapseCard.Header = Header;

export { CollapseCard };
