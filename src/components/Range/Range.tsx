import type { ChangeEventHandler } from "react";
import { forwardRef, useCallback, useEffect, useRef } from "react";
import type { RangeStyleProps } from "./styles";
import { Container, RangeInput } from "./styles";

export interface RangeProps extends RangeStyleProps {
  name?: string;
  value?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export const Range = forwardRef<HTMLInputElement, RangeProps>((args, ref) => {
  const { value, defaultValue, min = 0, step } = args;
  const outputRef = useRef<HTMLOutputElement>(null);

  const onChange = useCallback(
    (current: number) => {
      if (outputRef.current)
        outputRef.current.value = (current / (step ?? 1)).toString();
    },
    [step]
  );

  useEffect(
    () => onChange(value ?? defaultValue ?? min),
    [value, defaultValue, min, onChange]
  );

  return (
    <Container fullWidth={args.fullWidth}>
      <RangeInput
        {...args}
        ref={ref}
        onChange={(e) => {
          onChange(Number(e.target.value));
          args.onChange?.(e);
        }}
      />
      <output ref={outputRef}>{min}</output>
    </Container>
  );
});

export default Range;
