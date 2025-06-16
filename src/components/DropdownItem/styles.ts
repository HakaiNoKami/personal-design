import styled from "styled-components";

export const ItemContainer = styled.p`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.8rem 1.6rem;
  gap: 1rem;
  font-size: 1.4rem;
  white-space: nowrap;

  cursor: pointer;

  &:hover {
    color: var(--blue-dark-800);
    background-color: var(--neutral);
  }
`;
