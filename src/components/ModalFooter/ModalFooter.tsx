import type { ReactNode } from "react";
import { Container } from "./styles";

export interface ModalFooterProps {
  children: ReactNode;
}

export const ModalFooter = (args: ModalFooterProps) => <Container {...args} />;

export default ModalFooter;
