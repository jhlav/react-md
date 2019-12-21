import React, { FC, Fragment } from "react";
import { FormattedVariableItemRecord } from "utils/sassdoc";

import Variable from "./Variable";
import SectionTitle from "./SectionTitle";

export interface VariablesProps {
  packageName: string;
  variables: FormattedVariableItemRecord;
}

const Variables: FC<VariablesProps> = ({ packageName, variables }) => (
  <Fragment>
    <SectionTitle packageName={packageName} type="Variables" />
    {Object.values(variables).map(variable => (
      <Variable key={variable.name} {...variable} />
    ))}
  </Fragment>
);

export default Variables;
