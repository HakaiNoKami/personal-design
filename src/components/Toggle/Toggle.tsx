import { useCallback, useEffect, useState } from "react";
import { Container, ToggleContent } from "./styles";

export interface ToggleProps {
  label?: string;
  value?: boolean;
  defaultValue?: boolean;
  onChange?: (value: boolean) => void;
}

export const Toggle = ({
  label,
  value,
  defaultValue = false,
  onChange,
}: ToggleProps) => {
  const [internalValue, setInternalValue] = useState(defaultValue);

  useEffect(() => setInternalValue(defaultValue), [defaultValue]);

  const handleChange = useCallback(() => {
    setInternalValue((currentValue) => !currentValue);
    onChange?.(!(value ?? internalValue));
  }, [value, internalValue, onChange]);

  if (label)
    return (
      <ToggleContent>
        <p>{label}</p>
        <Container isActive={value ?? internalValue} onClick={handleChange} />
      </ToggleContent>
    );

  return <Container isActive={value ?? internalValue} onClick={handleChange} />;
};

export default Toggle;
