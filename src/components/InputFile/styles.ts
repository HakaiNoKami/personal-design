import { Button } from "components/Button";
import styled from "styled-components";

export const InputFileContainer = styled.div`
  position: relative;
  width: 100%;
  height: 12.2rem;
  border: 0.1rem dashed var(--neutral-400);
  border-radius: 0.4rem;
  padding: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  > div:first-child {
    max-height: 100%;
    overflow: auto;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;

    > p {
      pointer-events: none;
    }
  }

  > button {
    z-index: 2;
    min-width: max-content;
  }
`;

export const HiddenInputFile = styled.input.attrs({ type: "file" })`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  z-index: 0;
  pointer-events: fill;
`;

export const CustomButton = styled(Button)`
  color: var(--blue-dark-600);
  border-color: var(--blue-dark-600);
  background-color: var(--white);

  &:hover {
    color: var(--blue-dark-800);
    border-color: var(--blue-dark-800);
    background-color: var(--white);
  }
`;
