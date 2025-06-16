import { Loading } from "components/Loading";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { forwardRef } from "react";
import type { IconButtonStyleProps } from "./styles";
import { Container } from "./styles";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    IconButtonStyleProps {
  icon: ReactNode;
  loading?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, name, onClick, loading = false, disabled, ...args }, ref) => {
    return (
      <Container
        ref={ref}
        title={name}
        disabled={disabled}
        onClick={(e) => !disabled && onClick?.(e)}
        {...args}
      >
        {loading ? <Loading /> : icon}
      </Container>
    );
  }
);

export default IconButton;
