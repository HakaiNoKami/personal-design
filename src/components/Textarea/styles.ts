import styled from "styled-components";

export interface TextareaStyleProps {
  fullWidth?: boolean;
  readOnly?: boolean;
}

export const Container = styled.div`
  position: relative;
  width: inherit;

  span {
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: 0.03rem;
    display: block;
  }
`;

export const TextareaContent = styled.textarea<TextareaStyleProps>`
  min-width: 10rem;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "max-content")};
  background: ${({ readOnly }) =>
    readOnly ? "var(--neutral)" : "var(--white)"};
  border-radius: 0.4rem;
  border: 0.1rem solid var(--neutral-400);
  padding: 1rem 1.2rem;
  align-items: center;
  color: var(--text);
  font-size: 1.4rem;
  line-height: 2rem;
  font-weight: 400;
  resize: none;

  :focus {
    outline: 0.2rem solid var(--gray);
  }

  ::placeholder {
    color: var(--neutral-400);
  }
`;
