import type { ReactNode } from "react";
import { createPortal } from "react-dom";
import { Container, ModalContent } from "./styles";

export interface ModalProps {
  show: boolean;
  children: ReactNode;
}

const modalRoot = document.getElementById("modal");

export const Modal = ({ show, children }: ModalProps) => {
  if (!modalRoot || !show) return <></>;

  return createPortal(
    <Container>
      <ModalContent>{children}</ModalContent>
    </Container>,
    modalRoot
  );
};

export default Modal;
