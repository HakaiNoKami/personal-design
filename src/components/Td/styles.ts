import type { TdHTMLAttributes } from "react";
import styled, { css } from "styled-components";

export interface TdStyleProps
  extends TdHTMLAttributes<HTMLTableDataCellElement> {
  width?: string;
  hasDivisor?: boolean;
}

export const Container = styled.td<TdStyleProps>`
  width: ${({ width }) => width ?? "auto"};
  max-width: ${({ width }) => width ?? "auto"};
  vertical-align: middle;

  ${({ hasDivisor }) =>
    hasDivisor &&
    css`
      border-left: 0.1rem solid var(--gray);
    `}
`;
