import styled, { css } from "styled-components";

export interface TooltipStyleProps {
  position?: "top" | "right" | "bottom" | "left";
}

export const Container = styled.div`
  position: relative;
  cursor: default;

  &:hover > .content-tooltip {
    visibility: visible;
  }
`;

export const ContentTooltip = styled.div.attrs({
  className: "content-tooltip",
})<TooltipStyleProps>`
  visibility: hidden;
  width: max-content;
  max-width: 30rem;
  background-color: var(--text);
  color: var(--white);
  padding: 0.5rem;
  border-radius: 0.6rem;

  position: absolute;
  z-index: 1;

  ${({ position = "top" }) => {
    switch (position) {
      case "right":
        return css`
          transform: translate(100%, -50%);
          top: 50%;
          right: -1rem;

          &::after {
            content: " ";
            position: absolute;
            top: 50%;
            right: calc(100% - 0.1rem);
            margin-top: -0.5rem;
            border-width: 0.5rem;
            border-style: solid;
            border-color: transparent var(--text) transparent transparent;
          }
        `;
      case "bottom":
        return css`
          transform: translate(-50%, 100%);
          left: 50%;
          bottom: -1rem;

          &::after {
            content: " ";
            position: absolute;
            bottom: calc(100% - 0.1rem);
            left: 50%;
            margin-left: -0.5rem;
            border-width: 0.5rem;
            border-style: solid;
            border-color: transparent transparent var(--text) transparent;
          }
        `;
      case "left":
        return css`
          transform: translate(-100%, -50%);
          top: 50%;
          left: -1rem;

          &::after {
            content: " ";
            position: absolute;
            top: 50%;
            left: calc(100% - 0.1rem);
            margin-top: -0.5rem;
            border-width: 0.5rem;
            border-style: solid;
            border-color: transparent transparent transparent var(--text);
          }
        `;
      default:
        return css`
          transform: translate(-50%, -100%);
          left: 50%;
          top: -1rem;

          &::after {
            content: " ";
            position: absolute;
            top: calc(100% - 0.1rem);
            left: 50%;
            margin-left: -0.5rem;
            border-width: 0.5rem;
            border-style: solid;
            border-color: var(--text) transparent transparent transparent;
          }
        `;
    }
  }}
`;
