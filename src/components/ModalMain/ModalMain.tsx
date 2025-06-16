import type { ReactNode } from "react";
import type { ModalMainStyleProps } from "./styles";
import { Container } from "./styles";

export interface ModalMainProps extends ModalMainStyleProps {
  children: ReactNode;
}

export const ModalMain = (args: ModalMainProps) => <Container {...args} />;

export default ModalMain;
