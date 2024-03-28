import React from "react";
import { CollapseProps } from "./CollapseCard";
import { HeaderToggleElement } from "./Header";
import { getComponentClassName } from "../Form/core";
import "@axa-fr/design-system-css/dist/Collapse/Accordion.agent.css";

type AccordionCoreProps = {
  className?: string;
  classModifier?: string;
  children: React.ReactElement<CollapseProps>[];
  handleToggle: (e: HeaderToggleElement) => void;
  collapses: boolean[];
};

export const AccordionCore = ({
  className = "af-accordion",
  classModifier,
  children,
  handleToggle,
  collapses,
}: AccordionCoreProps) => {
  const renderedChildren = React.Children.map(children, (child, index) => {
    let mixCallback = handleToggle;
    if (child.props.onToggle) {
      mixCallback = (e: HeaderToggleElement) => {
        handleToggle(e);
        if (child.props.onToggle) {
          child.props.onToggle(e);
        }
      };
    }
    return React.cloneElement(child, {
      ...child.props,
      index,
      onToggle: mixCallback,
      isOpen:
        collapses[index] !== undefined ? collapses[index] : child.props.isOpen,
      className: child.props.className,
      classModifier: child.props.classModifier,
    });
  });
  const componentClassName = getComponentClassName(className, classModifier);
  return (
    <div
      className={componentClassName}
      role="tablist"
      aria-multiselectable="true"
    >
      {renderedChildren}
    </div>
  );
};
