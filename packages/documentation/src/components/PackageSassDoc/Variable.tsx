import React, { FC, Fragment } from "react";

import { Code } from "components/Code";
import { Markdown } from "components/Markdown";
import GithubLink from "components/GithubLink";
import { GITHUB_FILE_URL } from "constants/github";
import { FormattedVariableItem } from "utils/sassdoc";

import ItemName from "./ItemName";
import getId from "./getId";
import styles from "./styles";
import VariableCode from "./VariableCode";

const Variable: FC<FormattedVariableItem> = ({
  name,
  description,
  type,
  value,
  compiled,
  overridable,
  source,
  packageName,
}) => {
  const id = getId(name, "variable", packageName);
  const githubId = `${id}-source`;
  return (
    <Fragment>
      <ItemName name={name} type="variable" packageName={packageName} />
      <div className={styles("row")}>
        <Code>{type}</Code>
        <GithubLink
          id={githubId}
          aria-label="Github source"
          href={`${GITHUB_FILE_URL}/${source}`}
        />
      </div>
      {description && <Markdown>{description}</Markdown>}
      <VariableCode
        baseId={id}
        name={name}
        value={value}
        compiled={compiled}
        overridable={overridable}
      />
    </Fragment>
  );
};

export default Variable;
