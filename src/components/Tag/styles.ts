import styled, { css } from "styled-components";

export type TagVariant = "default" | "primary" | "success" | "danger";

export interface TagStyleProps {
  variant?: TagVariant;
  filled?: boolean;
}

const getColorsByVariant = (variant?: TagVariant) => {
  switch (variant) {
    case "primary":
      return ["var(--blue-dark-600)", "var(--blue-light-400)"];
    case "success":
      return ["var(--green-light-600)", "var(--green-light-100)"];
    case "danger":
      return ["var(--red-light-600)", "var(--red-light-100)"];
    default:
      return ["var(--white)", "var(--neutral-400)"];
  }
};

export const Container = styled.mark<TagStyleProps>`
  width: max-content;
  padding: 0.4rem 0.8rem;
  font-size: 1.2rem;
  line-height: 1.5rem;
  border-radius: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  > svg {
    height: 1.5rem;
  }

  ${({ variant, filled }) => {
    const [textColor, bg] = getColorsByVariant(variant);

    if (filled)
      return css`
        color: ${bg};
        background-color: ${textColor};
      `;

    return css`
      color: ${textColor};
      background-color: ${bg};
    `;
  }}
`;
