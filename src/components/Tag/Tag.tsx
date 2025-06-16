import type { ReactNode } from "react";
import type { TagStyleProps } from "./styles";
import { Container } from "./styles";

export interface TagProps extends TagStyleProps {
  children: ReactNode;
  icon?: ReactNode;
}

export const Tag = ({ children, icon, ...args }: TagProps) => {
  return (
    <Container {...args}>
      {icon}
      {children}
    </Container>
  );
};

export default Tag;
