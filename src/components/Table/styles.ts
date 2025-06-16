import type { TableHTMLAttributes } from "react";
import styled, { css } from "styled-components";

export interface TableStyleProps extends TableHTMLAttributes<HTMLTableElement> {
  fullWidth?: boolean;
  spacing?: number;
  overflow?: boolean;
  fixed?: boolean;
  hasFilter?: boolean;
}

export const OverflowTable = styled.div<Pick<TableStyleProps, "fullWidth">>`
  display: block;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  overflow-x: auto;
`;

export const Container = styled.table<TableStyleProps>`
  border: 0.1rem solid var(--gray);
  border-top: none;
  position: relative;

  ${({ spacing = 0.8, overflow, fullWidth, fixed, hasFilter }) => css`
    width: ${fullWidth ? "100%" : "initial"};
    min-width: ${overflow ? "100%" : "initial"};
    table-layout: ${fixed ? "fixed" : "auto"};
    border-spacing: 0;

    th,
    td {
      height: 4rem;
      padding: ${spacing}rem;
      border-collapse: collapse;
      border-bottom: 0.1rem solid var(--gray);
    }

    thead tr th {
      background-color: var(--neutral);
    }

    tbody tr td:first-of-type {
      border-left: none;
    }

    tbody tr:last-of-type td {
      border-bottom: none;
    }

    tfoot td {
      border-bottom: none;
    }

    ${hasFilter
      ? css`
          border-bottom-left-radius: 0.4rem;
          border-bottom-right-radius: 0.4rem;
        `
      : css`
          border-radius: 0.4rem;

          thead tr {
            th {
              border-top: 0.1rem solid var(--gray);
            }

            &:first-of-type th:first-of-type {
              border-top-left-radius: 0.4rem;
            }

            &:first-of-type th:last-of-type {
              border-top-right-radius: 0.4rem;
            }
          }
        `}

    ${overflow &&
    css`
      th {
        white-space: pre;
      }
    `}
  `}
`;
