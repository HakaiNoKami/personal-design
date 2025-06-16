import styled, { css } from "styled-components";

export interface RadioStyleProps {
  noWrap?: boolean;
  maxContent?: boolean;
}

export const Container = styled.label<RadioStyleProps>`
  width: ${({ maxContent }) => (maxContent ? "max-content" : "100%")};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;

  input {
    width: 1.6rem;
    height: 1.6rem;
    margin-right: 0.8rem;
    border: 1px solid var(--neutral-400);
  }

  > span {
    flex: 1;
    vertical-align: middle;
    font-size: 1.4rem;
    line-height: 1.6rem;

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
  margin-right: 0.8rem;
  border: 1px solid var(--neutral-400);

  &:focus {
    outline: 0.2rem solid var(--gray);
  }
`;
