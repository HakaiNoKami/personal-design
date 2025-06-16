import type { ReactNode } from "react";
import type { TdStyleProps } from "./styles";
import { Container } from "./styles";

export interface TdProps extends TdStyleProps {
  children: ReactNode;
}

export const Td = (args: TdProps) => <Container {...args} />;

export default Td;
