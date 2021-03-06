import React, {
  CSSProperties,
  forwardRef,
  ReactElement,
  ReactNode,
  Ref,
  useCallback,
  useState,
} from "react";
import cn from "classnames";
import { Button } from "@react-md/button";
import { useIcon } from "@react-md/icon";
import { bem } from "@react-md/utils";

import TextField, { TextFieldProps } from "./TextField";

export interface PasswordProps
  extends Omit<TextFieldProps, "type" | "rightChildren"> {
  /**
   * The icon to use to toggle the visibility of the password by changing the
   * input type to text temporarily.
   */
  visibilityIcon?: ReactNode;

  /**
   * An optional style to apply to the visibility toggle button.
   */
  visibilityStyle?: CSSProperties;

  /**
   * An optional classname to apply to the visibility toggle button.
   */
  visibilityClassName?: string;

  /**
   * An optional `aria-label` to apply to the visibility toggle button.
   */
  visibilityLabel?: string;

  /**
   * Boolean if the visibility toggle feature should be disabled.
   */
  disableVisibility?: boolean;
}

const block = bem("rmd-password");

/**
 * This component is a simple wrapper of the `TextField` that can only be
 * rendered for password inputs. There is built-in functionality to be able to
 * temporarily show the password's value by swapping the `type` to `"text"`.
 */
function Password(
  {
    className,
    inputClassName,
    visibilityIcon: propVisibilityIcon,
    visibilityStyle,
    visibilityClassName,
    visibilityLabel = "Temporarily show password",
    disableVisibility = false,
    ...props
  }: PasswordProps,
  ref?: Ref<HTMLInputElement>
): ReactElement {
  const { id } = props;
  const [type, setType] = useState<"password" | "text">("password");
  const toggle = useCallback(() => {
    setType(prevType => (prevType === "password" ? "text" : "password"));
  }, []);

  const visibilityIcon = useIcon("password", propVisibilityIcon);

  return (
    <TextField
      {...props}
      className={cn(block({ offset: !disableVisibility }), className)}
      inputClassName={cn(
        block("input", { offset: !disableVisibility }),
        inputClassName
      )}
      ref={ref}
      type={type}
      isRightAddon={false}
      rightChildren={
        !disableVisibility && (
          <Button
            id={`${id}-password-toggle`}
            aria-label={visibilityLabel}
            buttonType="icon"
            onClick={toggle}
            style={visibilityStyle}
            className={cn(block("toggle"), visibilityClassName)}
          >
            {visibilityIcon}
          </Button>
        )
      }
    />
  );
}

const ForwardedPassword = forwardRef<HTMLInputElement, PasswordProps>(Password);

if (process.env.NODE_ENV !== "production") {
  try {
    const PropTypes = require("prop-types");

    ForwardedPassword.propTypes = {
      id: PropTypes.string.isRequired,
      visibilityIcon: PropTypes.node,
      visibilityStyle: PropTypes.object,
      visibilityClassName: PropTypes.string,
      visibilityLabel: PropTypes.string,
      disableVisibility: PropTypes.bool,
    };
  } catch (e) {}
}

export default ForwardedPassword;
