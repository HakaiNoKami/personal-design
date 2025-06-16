import type { ChangeEvent } from "react";
import { forwardRef, useCallback, useState } from "react";
import type { CheckboxStyleProps } from "./styles";
import { Container, Input } from "./styles";

export interface CheckboxProps extends CheckboxStyleProps {
  label?: string;
  name?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, name, defaultChecked, checked, onChange, ...args }, ref) => {
    const [isChecked, setIsChecked] = useState(defaultChecked ?? false);

    const onChecked = useCallback(
      ({ target }: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(target.checked);
        onChange?.(target.checked);
      },
      [onChange]
    );

    return (
      <Container {...args}>
        <Input
          ref={ref}
          name={name}
          type="checkbox"
          onChange={onChecked}
          checked={checked ?? isChecked}
        />
        {label && <span title={label}>{label}</span>}
      </Container>
    );
  }
);

export default Checkbox;
