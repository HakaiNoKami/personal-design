import styled from "styled-components";

export interface InputStyleProps {
  fullWidth?: boolean;
  readOnly?: boolean;
}

export const Container = styled.div<Pick<InputStyleProps, "fullWidth">>`
  position: relative;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "max-content")};

  span {
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: 0.03rem;
  }
`;

export const InputContent = styled.div<Omit<InputStyleProps, "fullWidth">>`
  width: 100%;
  height: 4rem;
  background: ${({ readOnly }) =>
    readOnly ? "var(--neutral)" : "var(--white)"};
  border: 0.1rem solid var(--neutral-400);
  border-radius: 0.4rem;
  padding: 1rem 1.2rem;
  font-size: 1.4rem;
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;

  :has(input:-webkit-autofill, input:autofill) {
    background-color: light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4));
    color: fieldtext !important;
  }

  &:focus-within {
    outline: 0.2rem solid var(--gray);
  }

  input {
    width: 100%;
    flex: 1;
    height: 100%;
    border: none;
    background: initial;
    outline: initial;
    appearance: none;
    color: var(--text);

    ::placeholder {
      color: var(--neutral-400);
    }

    :-webkit-autofill,
    :autofill {
      appearance: initial;
      background-color: initial !important;
      background-image: initial !important;
      color: initial !important;
    }
  }

  svg:hover {
    cursor: pointer;
  }
`;

export const AddonContent = styled.div`
  height: 4rem;
  padding: 0.8rem 1.2rem;
  margin-right: -1.4rem;
  font-size: 1.4rem;
  line-height: 2rem;
  background-color: var(--neutral);
  border: 0.1rem solid var(--neutral-400);
  border-radius: 0 0.4rem 0.4rem 0;
`;
