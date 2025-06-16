import styled, { css } from "styled-components";

export type ChipVariant = "default" | "success" | "danger";

export interface ChipStyleProps {
  variant?: ChipVariant;
  bordered?: boolean;
}

const getColorsByVariant = (variant: ChipVariant) => {
  switch (variant) {
    case "success":
      return ["var(--green-light-600)", "var(--green-light-100)"];
    case "danger":
      return ["var(--red-light-600)", "var(--red-light-100)"];
    default:
      return ["var(--blue-dark-800)", "var(--neutral)"];
  }
};

export const Container = styled.div<ChipStyleProps>`
  width: max-content;
  display: flex;
  gap: 1rem;
  align-items: center;
  border-radius: 0.4rem;
  font-size: 1.4rem;
  line-height: 1.8rem;

  ${({ variant = "default", bordered }) => {
    const [color, bg] = getColorsByVariant(variant);

    if (bordered)
      return css`
        padding: 0.5rem 1.5rem;
        border: 0.1rem solid ${color};
        color: ${color};
      `;

    return css`
      padding: 0.6rem 1.6rem;
      background-color: ${bg};
      color: ${color};
    `;
  }}

  > span {
    font-size: 1.8rem;
    line-height: 1.8rem;
    font-weight: 900;
    cursor: pointer;
  }
`;
