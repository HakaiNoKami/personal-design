import { forwardRef } from "react";
import type { RadioStyleProps } from "./styles";
import { Container, Input } from "./styles";

export interface RadioProps extends RadioStyleProps {
  name: string;
  label?: string;
  value: string | number;
  defaultChecked?: boolean;
  checked?: boolean;
  onChange: (value: string | number) => void;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, noWrap, maxContent, onChange, ...args }, ref) => {
    return (
      <Container noWrap={noWrap} maxContent={maxContent}>
        <Input
          {...args}
          ref={ref}
          type="radio"
          onChange={() => onChange(args.value)}
        />
        {label && <span title={label}>{label}</span>}
      </Container>
    );
  }
);
export default Radio;
