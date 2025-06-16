import styled, { css } from "styled-components";

export interface AvatarStyleProps {
  small?: boolean;
  squared?: boolean;
}

export const Container = styled.div<AvatarStyleProps>`
  max-width: 100%;
  width: ${({ small }) => (small ? "2.4rem" : "5.6rem")};
  max-height: 100%;
  height: ${({ small }) => (small ? "2.4rem" : "5.6rem")};
  border: none;

  font-weight: 500;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  position: relative;
  overflow: hidden;

  ${({ squared }) =>
    squared
      ? css`
          border-radius: 0.4rem;
          background-color: var(--neutral);
          color: var(--blue-dark-800);
        `
      : css`
          border-radius: 50%;
          background-color: var(--primary-100-light);
          color: var(--primary-800-light);
        `}
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  text-align: center;
  object-fit: cover;
  color: transparent;
`;
