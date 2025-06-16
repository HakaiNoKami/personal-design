import type { ReactNode } from "react";
import type { ChipStyleProps } from "./styles";
import { Container } from "./styles";

export interface ChipProps extends ChipStyleProps {
  children: ReactNode;
  icon?: ReactNode;
  onClose?: () => void;
}

export const Chip = ({ children, icon, onClose, ...args }: ChipProps) => {
  return (
    <Container {...args}>
      {icon}
      {children}
      {onClose && <span onClick={onClose}>&times;</span>}
    </Container>
  );
};

export default Chip;
