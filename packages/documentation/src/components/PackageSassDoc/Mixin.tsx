import React, { FC, Fragment } from "react";
import { FormattedMixinItem } from "utils/sassdoc";
import { Code } from "components/Code";
import GithubLink from "components/GithubLink";
import { GITHUB_FILE_URL } from "constants/github";
import { Markdown } from "components/Markdown";
import getId from "./getId";
import ItemName from "./ItemName";
import ExpandableCode from "./ExpandableCode";
import styles from "./styles";

const Mixin: FC<FormattedMixinItem> = ({
  name,
  description,
  code,
  sourceCode,
  throws,
  parameters,
  source,
  packageName,
}) => {
  const id = getId(name, "mixin", packageName);
  const githubId = `${id}-source`;

  return (
    <Fragment>
      <ItemName name={name} type="mixin" packageName={packageName} />
      <div className={styles("row")}>
        <Code>mixin</Code>
        <GithubLink
          id={githubId}
          aria-label="Github source"
          href={`${GITHUB_FILE_URL}/${source}`}
        />
      </div>
      {description && <Markdown>{description}</Markdown>}
      <ExpandableCode code={code} sourceCode={sourceCode} />
    </Fragment>
  );
};

export default Mixin;
