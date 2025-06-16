import type { ReactNode } from "react";
import type { TooltipStyleProps } from "./styles";
import { Container, ContentTooltip } from "./styles";

export interface TooltipProps extends TooltipStyleProps {
  children: ReactNode;
  tip: ReactNode;
}

export const Tooltip = ({ children, tip, ...args }: TooltipProps) => {
  return (
    <Container>
      {children}
      <ContentTooltip {...args}>{tip}</ContentTooltip>
    </Container>
  );
};

export default Tooltip;
