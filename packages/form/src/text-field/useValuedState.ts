import { useCallback } from "react";
import { useToggle, useRefCache } from "@react-md/utils";

type TextElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
type ChangeEventHandler<T extends TextElement> = React.ChangeEventHandler<T>;

interface Options<T extends TextElement> {
  onChange?: ChangeEventHandler<T>;
  value?: string | number;
  defaultValue?: string | number;
}

/**
 * This is a small hook that will enable a valued flag when the value
 * of a text input or a textarea has a length greater than 0.
 *
 * @private
 */
export default function useValuedState<T extends TextElement>({
  onChange,
  value,
  defaultValue,
}: Options<T>): [boolean, ChangeEventHandler<T> | undefined] {
  const handler = useRefCache(onChange);
  const { toggled: valued, enable, disable } = useToggle(() => {
    if (typeof value === "undefined") {
      return (
        typeof defaultValue === "number" || (defaultValue || "").length > 0
      );
    }

    return false;
  });

  const handleChange = useCallback<React.ChangeEventHandler<T>>(event => {
    const onChange = handler.current;
    if (onChange) {
      onChange(event);
    }

    if (event.currentTarget.value.length > 0) {
      enable();
    } else {
      disable();
    }
  }, []);

  if (typeof value !== "undefined") {
    const isValued = typeof value === "number" || value.length > 0;
    return [isValued, onChange];
  }

  return [valued, handleChange];
}
