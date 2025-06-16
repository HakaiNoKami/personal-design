import { Loading } from "components/Loading";
import type { ReactNode } from "react";
import { forwardRef, useMemo } from "react";
import type { ButtonStyleProps } from "./styles";
import { Container } from "./styles";

export interface ButtonProps extends ButtonStyleProps {
  children: ReactNode;
  loading?: boolean;
  icon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, loading, icon, onClick, ...args }, ref) => {
    const disabled = useMemo(() => loading || args.disabled, [loading, args]);

    return (
      <Container
        {...args}
        ref={ref}
        disabled={disabled}
        onClick={(e) => !disabled && onClick?.(e)}
      >
        <code>{loading ? <Loading /> : icon}</code>
        {children}
      </Container>
    );
  }
);

export default Button;
