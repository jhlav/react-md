/* eslint-disable react/prop-types */
import React, { Fragment, ReactElement, ReactNode } from "react";
import { IconRotator, TextIconSpacing } from "@react-md/icon";
import { bem } from "@react-md/utils";

export interface ToggleChildrenProps {
  children?: ReactNode;
  visible: boolean;
  dropdownIcon: ReactNode;
  disableDropdownIcon: boolean;
}

const block = bem("rmd-menu-icon");

function ToggleChildren({
  dropdownIcon,
  disableDropdownIcon,
  children,
  visible,
}: ToggleChildrenProps): ReactElement {
  if (disableDropdownIcon || !dropdownIcon) {
    return <Fragment>{children}</Fragment>;
  }

  return (
    <TextIconSpacing
      icon={
        <IconRotator rotated={visible} className={block()}>
          {dropdownIcon}
        </IconRotator>
      }
      iconAfter
    >
      {children}
    </TextIconSpacing>
  );
}

export default ToggleChildren;
