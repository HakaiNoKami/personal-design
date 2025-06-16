import type { ReactNode } from "react";
import type { GridStyleProps } from "./styles";
import { Container } from "./styles";

export interface GridProps extends GridStyleProps {
  children: ReactNode;
}

export const Grid = ({ children, ...args }: GridProps) => {
  return <Container {...args}>{children}</Container>;
};

export default Grid;
