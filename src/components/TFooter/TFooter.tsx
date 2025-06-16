import { useCommonText } from "providers/CommonText";
import type { TFooterStyleProps } from "./styles";
import { Container } from "./styles";

export interface TFooterProps extends TFooterStyleProps {
  count: number;
  totalText?: string;
}

const maxColSpan = 100;

export const TFooter = ({ count, totalText, ...args }: TFooterProps) => {
  const { table } = useCommonText();

  return (
    <Container {...args}>
      <tr>
        <td colSpan={maxColSpan}>{`${
          totalText ?? table?.total ?? ""
        }: ${count}`}</td>
      </tr>
    </Container>
  );
};

export default TFooter;
