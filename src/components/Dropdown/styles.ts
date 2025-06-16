import { ArrowDownIcon } from "assets";
import styled, { css } from "styled-components";

export interface DropdownStyleProps {
  open?: boolean;
  fullWidth?: boolean;
  outlined?: boolean;
  bordered?: boolean;
  disabled?: boolean;
  centralized?: boolean;
  positionIcon?: "start" | "end";
}

export const Container = styled.div<Pick<DropdownStyleProps, "fullWidth">>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "max-content")};
  position: relative;
`;

interface DropdownContentProps
  extends Omit<DropdownStyleProps, "open" | "centralized" | "positionIcon"> {}

export const DropdownContent = styled.div<DropdownContentProps>`
  width: 100%;
  height: 4rem;
  border-radius: 0.4rem;
  padding: 0.9rem 1.6rem;
  font-size: 1.4rem;
  font-weight: 400;

  background-color: transparent;
  border: 0.1rem solid transparent;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  ${({ disabled, bordered, outlined }) => {
    const bg = "var(--neutral)";
    const textColor = disabled ? "var(--neutral-400)" : "var(--blue-dark-600)";

    if (bordered) {
      return css`
        color: ${textColor};
        border-color: ${textColor};
        cursor: ${disabled ? "no-drop" : "pointer"};
      `;
    }

    if (outlined) {
      return css`
        color: ${textColor};
        background-color: ${bg};
        cursor: ${disabled ? "no-drop" : "pointer"};
      `;
    }

    return css`
      background-color: ${textColor};
      color: var(--white);
      cursor: pointer;
    `;
  }}
`;

export const TextContent = styled.div<
  Pick<DropdownStyleProps, "centralized" | "positionIcon">
>`
  flex: 1;
  display: flex;
  justify-content: ${({ centralized }) =>
    centralized ? "center" : "flex-start"};
  align-items: center;
  flex-direction: ${({ positionIcon }) =>
    positionIcon === "end" ? "row-reverse" : "row"};
  gap: 1rem;
`;

export const ArrowIcon = styled(ArrowDownIcon)<
  Pick<DropdownStyleProps, "open">
>`
  transition: 250ms ease-in-out;

  ${({ open }) =>
    open &&
    css`
      transform: rotate(180deg);
    `}
`;

export const ItemsContent = styled.dialog`
  width: max-content;
  min-width: 100%;
  max-height: 17.4rem;
  overflow-y: auto;
  position: absolute;
  left: 0;
  right: 0;
  border-radius: 0.4rem;
  background-color: var(--white);
  border: 0.1rem solid var(--neutral-400);
  padding: 0.8rem;
  z-index: 5;

  bottom: -0.4rem;
  transform: translateY(100%);

  &[open] {
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
