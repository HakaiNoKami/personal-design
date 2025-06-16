import type { OverflowStyleProps } from "./styles";
import { OverflowContainer } from "./styles";

export interface OverflowTextProps extends OverflowStyleProps {
  children: string | number;
}

export const OverflowText = ({ children, ...args }: OverflowTextProps) => {
  return (
    <OverflowContainer {...args} title={children.toString()}>
      {children}
    </OverflowContainer>
  );
};

export default OverflowText;
