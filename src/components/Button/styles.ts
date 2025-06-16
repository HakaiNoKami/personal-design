import type { ButtonHTMLAttributes } from "react";
import styled, { css } from "styled-components";

export type ButtonVariant = "default" | "success" | "danger" | "link";

export interface ButtonStyleProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  minWidth?: boolean;
  small?: boolean;
  bordered?: boolean;
  outlined?: boolean;
  disabled?: boolean;
}

const getColorsByVariant = (variant?: ButtonVariant, disabled?: boolean) => {
  if (disabled)
    return [
      "var(--neutral)",
      "var(--neutral-400)",
      "var(--neutral-400)",
      "var(--neutral)",
    ];

  switch (variant) {
    case "success":
      return [
        "var(--white)",
        "var(--green-light-600)",
        "var(--green-light-800)",
        "var(--green-light-100)",
      ];
    case "danger":
      return [
        "var(--white)",
        "var(--red-light-600)",
        "var(--red-light-800)",
        "var(--red-light-100)",
      ];
    case "link":
      return [
        "var(--blue-dark-600)",
        "transparent",
        "transparent",
        "transparent",
      ];
    default:
      return [
        "var(--white)",
        "var(--blue-dark-600)",
        "var(--blue-dark-800)",
        "var(--neutral)",
      ];
  }
};

export const Container = styled.button<ButtonStyleProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "max-content")};
  min-width: ${({ minWidth }) => (minWidth ? `12rem` : "inital")};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.4rem;
  outline: transparent;
  background-color: transparent;
  border: 0.1rem solid transparent;
  padding: ${({ small }) => (small ? "0.5rem 1.6rem" : "0.9rem 1.6rem")};

  &:focus {
    outline: 0.2rem solid var(--gray);
  }

  > code:empty {
    display: none;
  }

  ${({ variant, bordered, outlined, disabled }) => {
    const [textColor, bg, bgHover, bgOutline] = getColorsByVariant(
      variant,
      disabled
    );

    if (variant === "link")
      return css`
        color: ${textColor};

        &:hover {
          text-decoration: underline;
        }
      `;

    if (bordered) {
      return css`
        color: ${bg};
        border-color: ${bg};

        &:hover {
          color: ${bgHover};
          border-color: ${bgHover};
          cursor: ${disabled ? "no-drop" : "pointer"};
        }
      `;
    }

    if (outlined) {
      return css`
        color: ${bg};
        background-color: ${bgOutline};

        &:hover {
          color: ${bgHover};
          cursor: ${disabled ? "no-drop" : "pointer"};
        }
      `;
    }

    return css`
      background: ${bg};
      color: ${textColor};

      &:hover {
        background: ${bgHover};
        cursor: ${disabled ? "no-drop" : "pointer"};
      }
    `;
  }}
`;
