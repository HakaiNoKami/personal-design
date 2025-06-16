import { CloseIcon } from "assets";
import { IconButton } from "components/IconButton";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { Container } from "./styles";

export interface ModalHeaderProps {
  children?: ReactNode;
  title?: string;
  onClose?: () => void;
}

export const ModalHeader = ({
  children,
  title,
  onClose,
  ...args
}: ModalHeaderProps) => {
  useEffect(() => {
    const hide = (e: KeyboardEvent) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", hide, false);
    return () => document.removeEventListener("keydown", hide, false);
  }, [onClose]);

  return (
    <Container {...args}>
      {children ?? <h3>{title}</h3>}
      {onClose && (
        <IconButton
          small
          outlined
          variant="text"
          onClick={onClose}
          icon={<CloseIcon />}
        />
      )}
    </Container>
  );
};

export default ModalHeader;
