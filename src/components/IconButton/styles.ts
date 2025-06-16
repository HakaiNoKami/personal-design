import styled, { css } from "styled-components";

export type IconButtonVariant = "default" | "success" | "danger" | "text";

export interface IconButtonStyleProps {
  variant?: IconButtonVariant;
  disabled?: boolean;
  outlined?: boolean;
  filled?: boolean;
  small?: boolean;
}

const getColorsByVariant = (
  variant?: IconButtonVariant,
  disabled?: boolean
) => {
  if (disabled)
    return ["var(--neutral-400)", "var(--neutral-400)", "var(--neutral)"];

  switch (variant) {
    case "text":
      return ["var(--text)", "var(--text-title)", "var(--neutral)"];
    case "success":
      return [
        "var(--green-light-600)",
        "var(--green-light-800)",
        "var(--green-light-100)",
      ];
    case "danger":
      return [
        "var(--red-light-600)",
        "var(--red-light-800)",
        "var(--red-light-100)",
      ];
    default:
      return ["var(--blue-dark-600)", "var(--blue-dark-800)", "var(--neutral)"];
  }
};

export const Container = styled.button.attrs({
  type: "button",
})<IconButtonStyleProps>`
  outline: transparent;
  border: initial;
  width: ${({ small }) => (small ? "3.2rem" : "4rem")};
  height: ${({ small }) => (small ? "3.2rem" : "4rem")};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;

  &:focus {
    outline: 0.2rem solid var(--gray);
  }

  ${({ variant, disabled, outlined, filled }) => {
    const [textColor, textHover, bg] = getColorsByVariant(variant, disabled);

    if (filled)
      return css`
        background-color: ${textColor};
        color: ${bg};

        &:hover {
          background-color: ${textHover};
          cursor: ${disabled ? "no-drop" : "pointer"};
        }
      `;

    return css`
      background-color: ${outlined ? bg : "transparent"};
      color: ${textColor};

      &:hover {
        color: ${textHover};
        cursor: ${disabled ? "no-drop" : "pointer"};
      }
    `;
  }}
`;
