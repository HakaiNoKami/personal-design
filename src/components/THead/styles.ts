import type { HTMLAttributes } from "react";
import styled from "styled-components";

export interface THeadStyleProps
  extends HTMLAttributes<HTMLTableSectionElement> {
  recoil?: number;
}

export const Container = styled.thead<THeadStyleProps>`
  position: -webkit-sticky;
  position: sticky;
  top: ${({ recoil = 0 }) => `-${recoil}rem`};

  th:not(:first-child) {
    border-left: 0.1rem solid var(--gray);
  }
`;
