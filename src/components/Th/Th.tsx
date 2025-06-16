import type { MouseEventHandler, ReactNode } from "react";
import type { ThStyleProps } from "./styles";
import { Container } from "./styles";

export interface ThProps extends ThStyleProps {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLTableHeaderCellElement>;
}

export const Th = (args: ThProps) => <Container {...args} />;

export default Th;
