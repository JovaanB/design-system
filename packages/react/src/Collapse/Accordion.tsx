import { useState } from "react";
import { HeaderToggleElement } from "./Header";
import { CollapseProps } from "./CollapseCard";
import { AccordionCore } from "./AccordionCore";

export const handleToggleState =
  (collapses: boolean[], { onlyOne, children }: AccordionProps) =>
  (e: HeaderToggleElement): boolean[] => {
    if (e.isOpen && onlyOne) {
      if (Array.isArray(children)) {
        return children.map((_child, index) =>
          e.index === index ? e.isOpen : false,
        );
      }
      return [e.isOpen];
    }
    const newCollapses = [...collapses];
    newCollapses[e.index] = e.isOpen;
    return newCollapses;
  };

export type AccordionProps = {
  onlyOne: boolean | true;
  className?: string | "af-accordion";
  classModifier?: string;
  children: React.ReactElement<CollapseProps>[];
};

export const Accordion = (props: AccordionProps) => {
  const [collapses, setCollapses] = useState<boolean[]>([]);

  const toggle = (e: HeaderToggleElement) => {
    const newCollapses = handleToggleState(collapses, props)(e);
    setCollapses(newCollapses);
  };

  return (
    <AccordionCore {...props} collapses={collapses} handleToggle={toggle} />
  );
};
