import { OverflowText } from "components/OverflowText";
import type { ReactNode } from "react";
import { ContainerOptions, NoOptionsContent } from "./styles";

export interface NoOptionProps {
  text: string;
}

export const NoOption = ({ text }: NoOptionProps) => {
  return (
    <NoOptionsContent>
      <p>{text}</p>
    </NoOptionsContent>
  );
};

export type OptionValue = string | number;

export interface OptionProps {
  children: string;
  value: OptionValue;
  icon?: ReactNode;
  onClick?: (value: OptionValue) => void;
}

export const Option = ({
  children,
  value,
  icon,
  onClick,
  ...args
}: OptionProps) => {
  return (
    <ContainerOptions onClick={() => onClick?.(value)} {...args}>
      {icon}
      <OverflowText>{children}</OverflowText>
    </ContainerOptions>
  );
};

export default Option;
