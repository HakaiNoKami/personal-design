import styled, { css } from "styled-components";

export interface ToastProviderStyleProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  reverseOrder?: boolean;
}

export const Container = styled.div<ToastProviderStyleProps>`
  position: fixed;
  padding: 1rem;
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  gap: 1rem;
  z-index: 20;

  > div {
    animation: leftToRight 250ms linear;
    background-color: var(--white);

    b {
      color: var(--text-title);
    }
  }

  @keyframes leftToRight {
    from {
      transform: translateX(-50%);
      opacity: 0;
    }

    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes rightToLeft {
    from {
      transform: translateX(50%);
      opacity: 0;
    }

    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  ${({ position, reverseOrder }) => {
    switch (position) {
      case "top-left":
        return css`
          top: 0;
          left: 0;

          flex-direction: ${reverseOrder ? "column" : "column-reverse"};
        `;
      case "top-right":
        return css`
          top: 0;
          right: 0;

          flex-direction: ${reverseOrder ? "column" : "column-reverse"};

          > div {
            animation-name: rightToLeft;
          }
        `;
      case "bottom-left":
        return css`
          left: 0;
          bottom: 0;

          flex-direction: ${reverseOrder ? "column-reverse" : "column"};
        `;
      default:
        return css`
          right: 0;
          bottom: 0;

          flex-direction: ${reverseOrder ? "column-reverse" : "column"};

          > div {
            animation-name: rightToLeft;
          }
        `;
    }
  }}
`;
