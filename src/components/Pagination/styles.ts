import { ArrowDownIcon } from "assets";
import styled, { css } from "styled-components";

export interface PaginationStyleProps {
  isActive?: boolean;
  disabled?: boolean;
}

export const Container = styled.div`
  width: max-content;
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const PageButton = styled.button.attrs({
  type: "button",
})<PaginationStyleProps>`
  width: 4rem;
  padding: 0.6rem;
  background-color: ${({ isActive }) =>
    isActive ? "var(--blue-light-200)" : "transparent"};
  border-radius: 0.4rem;
  font-size: 1.4rem;
  line-height: 2rem;
  border: initial;

  > svg {
    height: 2rem;
    margin: 0 auto;
  }

  ${({ disabled, isActive }) => {
    if (disabled)
      return css`
        color: var(--neutral-400);
      `;

    return isActive
      ? css`
          color: var(--blue-dark-600);
          background-color: var(--blue-light-400);
        `
      : css`
          color: var(--blue-dark-600);

          &:hover {
            color: var(--blue-dark-800);
            cursor: pointer;
          }
        `;
  }}
`;

export const LeftIcon = styled(ArrowDownIcon)`
  transform: rotate(90deg);
`;

export const RightIcon = styled(ArrowDownIcon)`
  transform: rotate(-90deg);
`;
