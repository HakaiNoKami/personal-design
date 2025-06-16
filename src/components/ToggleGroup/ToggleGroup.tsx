import type {
  ToggleButtonProps,
  ToggleButtonValue,
} from "components/ToggleButton";
import type { ReactNode } from "react";
import {
  Children,
  cloneElement,
  isValidElement,
  useCallback,
  useMemo,
  useState,
} from "react";
import type { ToggleGroupStyleProps } from "./styles";
import { Container } from "./styles";

export type ToggleGroupValue = ToggleButtonValue[] | ToggleButtonValue;

export interface ToggleGroupProps extends ToggleGroupStyleProps {
  children: ReactNode;
  defaultValue?: ToggleGroupValue;
  value?: ToggleGroupValue;
  onChange?: (value: ToggleGroupValue) => void;
}

type ToggleSetType = Set<ToggleButtonValue> | ToggleButtonValue;

export const ToggleGroup = ({
  children,
  exclusive,
  value,
  defaultValue = [],
  onChange,
  ...args
}: ToggleGroupProps) => {
  const [internalValue, setInternalValue] = useState<ToggleSetType>(
    exclusive
      ? (defaultValue as ToggleButtonValue)
      : new Set(defaultValue as ToggleButtonValue[])
  );

  const currentValue = useMemo(
    () => value ?? internalValue,
    [value, internalValue]
  );

  const onToggleButton = useCallback(
    (valueButton: ToggleButtonValue, active: boolean) => {
      if (exclusive) {
        setInternalValue(valueButton);
        onChange?.(valueButton);
      } else {
        const newValue = new Set(internalValue as Set<ToggleButtonValue>);
        active ? newValue.delete(valueButton) : newValue.add(valueButton);
        setInternalValue(newValue);
        onChange?.(Array.from(newValue));
      }
    },
    [exclusive, internalValue, onChange]
  );

  return (
    <Container exclusive={exclusive} {...args}>
      {Children.map(children, (child) => {
        if (isValidElement<ToggleButtonProps>(child)) {
          return cloneElement(child, {
            onClick: onToggleButton,
            active: exclusive
              ? currentValue === child.props.value
              : new Set(
                  currentValue as ToggleButtonValue[] | Set<ToggleButtonValue>
                ).has(child.props.value),
          });
        }
      })}
    </Container>
  );
};

export default ToggleGroup;
