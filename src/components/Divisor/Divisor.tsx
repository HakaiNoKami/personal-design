import type { DivisorStyleProps } from "./styles";
import { DivisorContent, DivisorLine } from "./styles";

export interface DivisorProps extends DivisorStyleProps {
  children?: string;
}

export const Divisor = ({ children, ...args }: DivisorProps) => {
  if (children)
    return (
      <DivisorContent {...args}>
        <DivisorLine />
        <p>{children}</p>
        <DivisorLine />
      </DivisorContent>
    );

  return (
    <DivisorContent {...args}>
      <DivisorLine />
    </DivisorContent>
  );
};

export default Divisor;
