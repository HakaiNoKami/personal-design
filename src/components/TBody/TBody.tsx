import type { HTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

export interface TBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}

export const TBody = (args: TBodyProps) => <Container {...args} />;

export default TBody;
