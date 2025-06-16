import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem;
  border-bottom: 0.1rem solid var(--gray);
  gap: 1.6rem;

  > h3 {
    font-weight: normal;
  }
`;
