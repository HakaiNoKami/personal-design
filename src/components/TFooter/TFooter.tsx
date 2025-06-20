import { useTranslation } from "react-i18next";
import type { TFooterStyleProps } from "./styles";
import { Container } from "./styles";

export interface TFooterProps extends TFooterStyleProps {
  count: number;
}

const maxColSpan = 100;

export const TFooter = ({ count, ...args }: TFooterProps) => {
  const { t } = useTranslation();

  return (
    <Container {...args}>
      <tr>
        <td colSpan={maxColSpan}>{`${t("total")}: ${count}`}</td>
      </tr>
    </Container>
  );
};

export default TFooter;
