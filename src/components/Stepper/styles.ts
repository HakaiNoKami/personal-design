import styled, { css } from "styled-components";

export interface StepperStyleProps {
  direction?: "vertical" | "horizontal";
  hasScroll?: boolean;
  isActive?: boolean;
}

export const Container = styled.div<Pick<StepperStyleProps, "direction">>`
  display: flex;
  gap: 1.8rem;
  width: 100%;
  height: 100%;

  ${({ direction = "vertical" }) =>
    direction === "vertical"
      ? css`
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
        `
      : css`
          flex-direction: row;
          justify-content: start;
          align-items: flex-start;
        `}
`;

export const TitlesContent = styled.section<
  Pick<StepperStyleProps, "direction">
>`
  max-width: 100%;
  display: flex;
  overflow-x: auto;
  background-color: var(--neutral);
  padding: 0.4rem;
  border-radius: 0.4rem;

  ${({ direction = "vertical" }) =>
    direction === "vertical"
      ? css`
          width: 100%;
          min-height: 4rem;
          flex-direction: row;
          align-items: center;
        `
      : css`
          flex-direction: column;
          align-items: stretch;

          > p {
            width: 100%;
            text-align: right;
          }
        `}
`;

export const TitleItem = styled.p<Pick<StepperStyleProps, "isActive">>`
  width: max-content;
  padding: 0.6rem 1.6rem;
  text-align: center;
  border-radius: 0.4rem;

  &:hover,
  &:focus {
    color: var(--blue-dark-800);
    cursor: pointer;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      position: relative;
      color: var(--blue-dark-600);
      background-color: var(--white);
    `}
`;

export const ChildrensContent = styled.div<
  Pick<StepperStyleProps, "hasScroll">
>`
  width: 100%;
  max-height: 100%;
  flex: 1;
  overflow-y: ${({ hasScroll }) => (hasScroll ? "auto" : "initial")};
`;
