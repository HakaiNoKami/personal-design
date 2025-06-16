import type { ReactNode } from "react";
import type { BoxStyleProps } from "./styles";
import { Container } from "./styles";

export interface BoxProps extends BoxStyleProps {
  children: ReactNode;
}

export const Box = ({ children, ...args }: BoxProps) => {
  return <Container {...args}>{children}</Container>;
};

export default Box;
