import styled, { css } from "styled-components";

export interface ToggleStyleProps {
  isActive?: boolean;
}

export const ToggleContent = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  cursor: pointer;

  p {
    font-weight: bold;
  }
`;

export const Container = styled.button.attrs({
  type: "button",
})<ToggleStyleProps>`
  width: 4.8rem;
  height: 2.4rem;
  border-radius: 2.4rem;
  border: none;
  cursor: pointer;
  position: relative;
  transition: background ease-in-out 0.2s;

  &:focus {
    outline: 0.2rem solid var(--gray);
  }

  &::before {
    content: "";
    position: absolute;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 1.8rem;
    background-color: var(--white);
    top: 0.3rem;
    transition: left ease-in-out 0.2s;
  }

  ${({ isActive }) =>
    isActive
      ? css`
          background-color: var(--blue-light-500);

          &::before {
            left: 2.6rem;
          }
        `
      : css`
          background-color: var(--gray);

          &::before {
            left: 0.4rem;
          }
        `}
`;
