import type { ReactNode } from "react";
import type { THeadStyleProps } from "./styles";
import { Container } from "./styles";

export interface THeadProps extends THeadStyleProps {
  children: ReactNode;
}

export const THead = (args: THeadProps) => <Container {...args} />;

export default THead;
