import { OverflowText } from "components/OverflowText";
import { ContainerOptions } from "./styles";

export type MultiOptionValue = string | number;

export interface MultiOptionProps {
  children: string;
  value: MultiOptionValue;
  selected?: boolean;
  onClick?: (value: MultiOptionValue, selected?: boolean) => void;
}

export const MultiOption = ({
  children,
  value,
  selected = false,
  onClick,
  ...args
}: MultiOptionProps) => {
  return (
    <ContainerOptions {...args} onClick={(e) => e.stopPropagation()}>
      <input
        type="checkbox"
        checked={selected}
        onChange={({ target }) => onClick?.(value, !target.checked)}
      />
      <OverflowText>{children}</OverflowText>
    </ContainerOptions>
  );
};

export interface SelectAllOptionProps {
  text: string;
  onClick: () => void;
}

export const SelectAllOption = ({ text, onClick }: SelectAllOptionProps) => {
  return (
    <ContainerOptions
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      <OverflowText>{text}</OverflowText>
    </ContainerOptions>
  );
};

export default MultiOption;
