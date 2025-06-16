import type { ReactNode } from "react";
import type { CardInfoStyleProps } from "./styles";
import { Container, Footer, Header, IconContainer, Main } from "./styles";

export interface CardInfoProps extends CardInfoStyleProps {
  icon: ReactNode;
  tag?: ReactNode;
  title: string;
  description?: string;
  button?: ReactNode;
}

export const CardInfo = ({
  icon,
  tag,
  title,
  description,
  button,
  ...args
}: CardInfoProps) => {
  return (
    <Container {...args}>
      <Header>
        <IconContainer>{icon}</IconContainer>
        {tag}
      </Header>
      <Main>
        <p>{title}</p>
        {description && <span>{description}</span>}
      </Main>
      {button && <Footer>{button}</Footer>}
    </Container>
  );
};

export default CardInfo;
