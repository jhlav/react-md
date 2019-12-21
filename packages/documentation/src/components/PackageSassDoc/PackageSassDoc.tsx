import React, { FC } from "react";

import { PackageSassDoc as FoundSassDoc } from "utils/sassdoc";

import styles from "./styles";
import Variables from "./Variables";
import Mixins from "./Mixins";

interface PackageSassDocProps extends FoundSassDoc {
  packageName: string;
}

const PackageSassDoc: FC<PackageSassDocProps> = ({
  packageName,
  mixins,
  variables,
}) => {
  return (
    <div className={styles()}>
      <Mixins packageName={packageName} mixins={mixins} />
      <Variables packageName={packageName} variables={variables} />
    </div>
  );
};

export default PackageSassDoc;
