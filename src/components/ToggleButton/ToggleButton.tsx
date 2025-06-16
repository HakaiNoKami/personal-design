import type { ReactNode } from "react";
import { useState } from "react";
import type { ToggleButtonStyleProps } from "./styles";
import { ToggleContainer } from "./styles";

export type ToggleButtonValue = string | number;

export interface ToggleButtonProps extends ToggleButtonStyleProps {
  children?: ReactNode;
  value: ToggleButtonValue;
  icon?: ReactNode;
  title?: string;
  onClick?: (value: ToggleButtonValue, active: boolean) => void;
}

export const ToggleButton = ({
  children,
  value,
  icon,
  onClick,
  ...args
}: ToggleButtonProps) => {
  const [isActive, setIsActive] = useState(args.active ?? false);

  return (
    <ToggleContainer
      {...args}
      type="button"
      onClick={() => {
        if (args.disabled) return;

        onClick?.(value, isActive);
        setIsActive(!isActive);
      }}
    >
      {icon}
      {children}
    </ToggleContainer>
  );
};

export default ToggleButton;
