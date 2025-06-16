import type { ThHTMLAttributes } from "react";
import styled, { css } from "styled-components";

export interface ThStyleProps
  extends ThHTMLAttributes<HTMLTableHeaderCellElement> {
  width?: string;
}

export const Container = styled.th<ThStyleProps>`
  width: ${({ width }) => width ?? "auto"};
  text-align: start;
  font-weight: 700;
  line-height: 2rem;
  vertical-align: middle;

  &:hover {
    color: var(--text-title);
  }

  ${({ onClick }) =>
    !!onClick &&
    css`
      cursor: pointer;

      &::after {
        content: "⇵";
        margin-left: 0.5rem;
        color: inherit;
      }
    `}
`;
