import React, { FC, Fragment } from "react";
import { ArrowDropDownSVGIcon } from "@react-md/material-icons";
import { DropdownMenu } from "@react-md/menu";

import "./NavHeaderTitle.scss";
import Version1MenuItem from "./Version1MenuItem";

const NavHeaderTitle: FC = () => (
  <Fragment>
    react-md
    <DropdownMenu
      id="version-picker"
      items={[<Version1MenuItem small />]}
      dropdownIcon={<ArrowDropDownSVGIcon />}
      anchor={{ x: "inner-right", y: "below" }}
      className="nav-header-title"
    >
      @v2
    </DropdownMenu>
  </Fragment>
);

export default NavHeaderTitle;
