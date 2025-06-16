import styled, { css } from "styled-components";

export type BoxVariant = "default" | "neutral" | "gray";

export interface BoxStyleProps {
  padding?: number;
  radius?: number;
  fullHeight?: boolean;
  variant?: BoxVariant;
}

export const Container = styled.div<BoxStyleProps>`
  width: 100%;
  height: ${({ fullHeight }) => (fullHeight ? "100%" : "initial")};
  padding: ${({ padding = 1.6 }) => `${padding}rem`};
  border-radius: ${({ radius = 0 }) => `${radius}rem`};

  ${({ variant }) => {
    switch (variant) {
      case "neutral":
        return css`
          background-color: var(--neutral);
        `;
      case "gray":
        return css`
          background-color: var(--gray);
        `;
      default:
        return css`
          background-color: var(--white);
        `;
    }
  }}
`;
