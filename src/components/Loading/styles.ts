import styled from "styled-components";

export interface LoadingStyleProps {
  centered?: boolean;
}

export const LoadingContainer = styled.div<LoadingStyleProps>`
  margin: ${({ centered = false }) => (centered ? "0 auto" : "initial")};
  width: max-content;
`;

export const LoadingContent = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0.2rem;
  border: 0.2rem solid currentColor;
  border-radius: 50%;
  border-top-color: transparent;
  border-bottom-color: transparent;
  animation: rotating 1s infinite;

  @keyframes rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;
