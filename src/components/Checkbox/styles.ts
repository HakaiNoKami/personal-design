import styled, { css } from "styled-components";

export interface CheckboxStyleProps {
  noWrap?: boolean;
  maxContent?: boolean;
}

export const Container = styled.label<CheckboxStyleProps>`
  width: ${({ maxContent }) => (maxContent ? "max-content" : "100%")};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  > span {
    flex: 1;
    vertical-align: middle;
    font-size: 1.4rem;
    line-height: 1.6rem;
    margin-left: 0.8rem;

    ${({ noWrap }) =>
      noWrap &&
      css`
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
        white-space: normal;
      `}
  }
`;

export const Input = styled.input`
  width: 1.6rem;
  height: 1.6rem;
  border: 1px solid var(--neutral-400);
  border-radius: 0.4rem;

  &:focus {
    outline: 0.2rem solid var(--gray);
  }
`;
