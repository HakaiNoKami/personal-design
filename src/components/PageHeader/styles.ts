import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 1.8rem;
  border-radius: 0.4rem;
  background-color: var(--neutral);

  h2 {
    font-size: 2rem;
    line-height: 3rem;
    color: var(--text-title);
    font-weight: normal;
  }
`;

export const IconContent = styled.div`
  align-self: flex-start;

  svg {
    max-height: 5rem;
    max-width: 5rem;
  }
`;

export const InfoContent = styled.div`
  flex: 1;
`;

export const ActionsContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > button {
    border: 0.1rem solid currentColor;
  }
`;
