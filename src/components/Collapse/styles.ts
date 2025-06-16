import styled from "styled-components";

export interface CollapseStyleProps {
  isOpen: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const SummaryContent = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  cursor: pointer;
`;

export const TextContent = styled.div`
  flex: 1;
`;

export const IconContent = styled.div<CollapseStyleProps>`
  padding: 1.05rem 1.3rem;
  background-color: var(--neutral);
  border-radius: 0.4rem;

  svg {
    transition: ease-in-out 0.2s;
    transform: ${({ isOpen }) => (isOpen ? "rotate(-90deg)" : "initial")};
  }
`;
