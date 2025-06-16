import type { ReactNode } from "react";
import { ItemContainer } from "./styles";

export interface DropdownItemProps {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
}

export const DropdownItem = ({
  icon,
  children,
  onClick,
  ...args
}: DropdownItemProps) => {
  return (
    <ItemContainer onClick={onClick} {...args}>
      {icon}
      {children}
    </ItemContainer>
  );
};

export default DropdownItem;
