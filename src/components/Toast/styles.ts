import { Button } from "components/Button";
import { IconButton } from "components/IconButton";
import styled from "styled-components";

export type ToastVariant = "success" | "error" | "warning" | "info";

export interface ToastStyleProps {
  variant?: ToastVariant;
}

const getColorByVariant = (variant: string) => {
  switch (variant) {
    case "error":
      return "var(--red)";
    case "warning":
      return "var(--yellow)";
    case "info":
      return "var(--cyan)";
    default:
      return "var(--green)";
  }
};

export const Container = styled.div<ToastStyleProps>`
  width: 30rem;
  padding: 1.6rem;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  background-color: var(--white);
  gap: 1.6rem;

  border-radius: 0.4rem;
  box-shadow: 0.2rem 0.2rem 1.2rem 0.2rem var(--box-shadow),
    0.2rem 0.2rem 1.2rem 0.2rem var(--box-shadow);

  border-left: 0.4rem solid
    ${({ variant }) => variant && getColorByVariant(variant)};

  &:hover .close-Button {
    opacity: 1;
  }
`;

export const IconContent = styled.div<ToastStyleProps>`
  width: 2.4rem;
  height: 2.4rem;
  color: ${({ variant }) => variant && getColorByVariant(variant)};
`;

export const InfoContent = styled.div`
  flex: 1;
  font-size: 1.4rem;
  line-height: 2rem;

  > p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: pre-line;
    -webkit-line-clamp: 4;
    word-break: break-word;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const CustomButton = styled(Button)`
  padding: 0.6rem 1.6rem;
  margin-top: 1.6rem;
  background-color: var(--neutral);
  color: var(--text-title);

  &:hover,
  &:focus {
    background-color: var(--gray);
  }
`;

export const CloseButton = styled(IconButton).attrs({
  className: "close-Button",
})`
  width: 2rem;
  height: 2rem;
  opacity: 0;
  transition: ease-in-out 0.2s;
  color: var(--text);

  &:hover {
    color: var(--text-title);
  }
`;
