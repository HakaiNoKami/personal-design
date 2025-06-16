import styled, { css } from "styled-components";

export interface ToggleButtonStyleProps {
  active?: boolean;
  disabled?: boolean;
}

export const ToggleContainer = styled.button.attrs({
  type: "button",
})<ToggleButtonStyleProps>`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 0.6rem 1.2rem;
  font-size: 1.4rem;
  line-height: 2rem;
  background-color: ${({ active }) =>
    active ? "var(--blue-light-400)" : "initial"};
  color: inherit;
  border-radius: 0.4rem;
  border: none;

  &:focus {
    outline: 0.2rem solid var(--gray);
  }

  svg {
    height: 2rem;
    vertical-align: middle;
  }

  ${({ disabled }) =>
    disabled
      ? css`
          cursor: no-drop;
          color: var(--neutral-400);
        `
      : css`
          cursor: pointer;
        `}
`;
