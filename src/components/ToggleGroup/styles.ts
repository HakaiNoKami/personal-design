import styled from "styled-components";

export interface ToggleGroupStyleProps {
  spacing?: number;
  exclusive?: boolean;
}

export const Container = styled.div<ToggleGroupStyleProps>`
  min-width: max-content;
  width: 100%;
  padding: 0.4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ spacing = 0.8, exclusive }) =>
    exclusive ? "initial" : `${spacing}rem`};
  background-color: var(--neutral);
  color: var(--blue-dark-600);
  border-radius: 0.4rem;

  > button {
    flex: 1;
  }
`;
