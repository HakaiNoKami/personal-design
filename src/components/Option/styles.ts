import styled from "styled-components";

export const NoOptionsContent = styled.div`
  padding: 2rem;
`;

export const ContainerOptions = styled.button.attrs({
  type: "button",
})`
  width: 100%;
  padding: 0.8rem;
  font-size: 1.4rem;
  line-height: 2rem;
  border-radius: 0.4rem;
  text-align: start;
  color: var(--text);
  background-color: transparent;
  outline: transparent;
  border: none;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  > p {
    flex: 1;
  }

  &:hover {
    background-color: var(--blue-dark-800);
    color: var(--white);
    cursor: pointer;
  }

  &:focus {
    outline: 0.2rem solid var(--gray);
  }
`;
