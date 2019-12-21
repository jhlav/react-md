import React, { FC, Fragment, useState } from "react";
import { CodeBlock } from "components/Code";
import { Collapse } from "@react-md/transition";
import styles from "./styles";

export interface ExpandableCodeProps {
  code: string;
  sourceCode: string;
}

const ExpandableCode: FC<ExpandableCodeProps> = ({ code, sourceCode }) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Fragment>
      <Collapse collapsed={collapsed} minHeight={56}>
        <CodeBlock language="scss">{collapsed ? code : sourceCode}</CodeBlock>
      </Collapse>
    </Fragment>
  );
};

export default ExpandableCode;
