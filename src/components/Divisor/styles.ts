import styled, { css } from "styled-components";

export interface DivisorStyleProps {
  recoil?: number;
}

export const DivisorContent = styled.section<DivisorStyleProps>`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  ${({ recoil }) =>
    recoil
      ? css`
          width: calc(100% + ${recoil * 2}rem);
          margin: 0 -${recoil}rem;
        `
      : css`
          width: 100%;
          margin: initial;
        `}
`;

export const DivisorLine = styled.hr`
  flex: 1;
  border: none;
  border-bottom: 0.1rem solid var(--gray);
`;
