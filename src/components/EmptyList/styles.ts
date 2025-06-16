import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 2.4rem;
  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: center;
  background-color: var(--neutral);

  h2 {
    font-size: 2.4rem;
    line-height: 3.6rem;
    font-weight: 700;
  }

  p {
    max-width: 50rem;
  }
`;
