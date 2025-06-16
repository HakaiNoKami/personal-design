import type { ReactNode } from "react";
import type { NavStyleProps } from "./styles";
import { Container, IconContent, Label, Title, TitleContent } from "./styles";

export interface NavProps extends NavStyleProps {
  label?: string;
  name: string;
  icon: ReactNode;
  justIcon: boolean;
  onClick?: () => void;
}

export const Nav = ({
  icon,
  label,
  name,
  justIcon,
  onClick,
  ...args
}: NavProps) => {
  return (
    <Container
      onClick={onClick}
      hasLabel={!!label}
      isActive={args.isActive}
      title={label ? `${label}: ${name}` : name}
    >
      <IconContent isActive={args.isActive}>{icon}</IconContent>
      {!justIcon && (
        <TitleContent>
          {label && <Label>{label}</Label>}
          <Title>{name}</Title>
        </TitleContent>
      )}
    </Container>
  );
};

export default Nav;
