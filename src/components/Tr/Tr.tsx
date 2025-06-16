import type { HTMLAttributes, ReactNode } from "react";
import { Container } from "./styles";

export interface TrProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
}

export const Tr = (args: TrProps) => <Container {...args} />;

export default Tr;
