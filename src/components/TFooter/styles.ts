import type { HTMLAttributes } from "react";
import styled from "styled-components";

export interface TFooterStyleProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  recoil?: number;
}

export const Container = styled.tfoot<TFooterStyleProps>`
  position: -webkit-sticky;
  position: sticky;
  bottom: ${({ recoil = 0 }) => `-${recoil}rem`};
  padding: 0.8rem;
  font-weight: 700;
  line-height: 2rem;

  td:first-child {
    border-top: 0.1rem solid var(--gray);
    vertical-align: middle;
    background-color: var(--neutral);
  }

  @media print {
    position: relative;
  }
`;
