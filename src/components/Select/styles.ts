import { ArrowDownIcon, CloseIcon } from "assets";
import styled, { css } from "styled-components";

export interface SelectStyleProps {
  fullWidth?: boolean;
  open?: boolean;
  disabled?: boolean;
  direction?: "up" | "down";
}

export const Container = styled.div<Pick<SelectStyleProps, "fullWidth">>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "max-content")};
  position: relative;
`;

export const SelectContent = styled.button.attrs({
  type: "button",
})<Pick<SelectStyleProps, "disabled">>`
  position: relative;
  width: 100%;
  height: 4rem;
  border-radius: 0.4rem;
  border: 0.1rem solid var(--neutral-400);
  padding: 1rem 1.2rem;
  font-size: 1.4rem;
  font-weight: 400;
  text-align: start;
  color: var(--text);
  background: ${({ disabled }) =>
    disabled ? "var(--neutral)" : "var(--white)"};
  outline: transparent;

  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 1rem;

  cursor: pointer;

  &:hover .clear {
    opacity: 1;
  }

  &:focus {
    outline: 0.2rem solid var(--gray);
  }

  span {
    color: var(--neutral-400);
  }

  p {
    flex: 1;

    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    white-space: normal;
    -webkit-line-clamp: 1;
    word-break: break-all;
  }
`;

export const InputFilter = styled.input`
  position: absolute;
  width: calc(100% - 2rem);
  height: 4rem;
  border-radius: 0.4rem;
  padding: 1rem 1.2rem;
  left: 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  ::placeholder {
    color: var(--neutral-400);
  }
`;

export const ClearIcon = styled(CloseIcon).attrs({
  className: "clear",
})`
  display: block;
  transition: ease-in-out 0.2s;
  opacity: 0;
  z-index: 2;
`;

export const ArrowIcon = styled(ArrowDownIcon)<Pick<SelectStyleProps, "open">>`
  transition: 250ms ease-in-out;

  ${({ open }) =>
    open &&
    css`
      transform: rotate(180deg);
    `}
`;

export const OptionsContent = styled.dialog<
  Pick<SelectStyleProps, "direction">
>`
  width: 100%;
  max-height: 17.4rem;
  overflow: hidden auto;
  position: absolute;
  left: 0;
  right: 0;
  border-radius: 0.4rem;
  background-color: var(--white);
  border: 0.1rem solid var(--neutral-400);
  padding: 0.8rem;
  z-index: 5;

  &[open] {
    color: var(--text);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
  }

  ${({ direction = "down" }) =>
    direction === "down"
      ? css`
          bottom: -0.4rem;
          transform: translateY(100%);
        `
      : css`
          top: -0.4rem;
          transform: translateY(-100%);
        `}
`;
