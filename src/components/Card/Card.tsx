import type { ReactNode } from "react";
import { Container, Content, Description } from "./styles";

export interface CardProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export const Card = ({ children, title, description }: CardProps) => {
  return (
    <Container>
      <header>
        <h2>{title}</h2>
      </header>
      <Content>
        <main>
          {description && <Description>{description}</Description>}
          {children}
        </main>
      </Content>
    </Container>
  );
};

export default Card;
