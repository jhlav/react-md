import React, { FC } from "react";

import Heading from "components/Heading";
import { ItemReferenceLink } from "utils/sassdoc";

import getId from "./getId";

const ItemName: FC<ItemReferenceLink> = ({ name, type, packageName }) => (
  <Heading id={getId(name, type, packageName)} level={3} margin="top">
    {name}
  </Heading>
);

export default ItemName;
