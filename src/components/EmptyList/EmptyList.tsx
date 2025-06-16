import { FileImg } from "assets";
import { Container } from "./styles";

export interface EmptyListProps {
  title: string;
  description: string;
}

export const EmptyList = ({ title, description }: EmptyListProps) => {
  return (
    <Container>
      <FileImg />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Container>
  );
};

export default EmptyList;
