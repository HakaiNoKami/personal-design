import styled from "styled-components";

export interface OverflowStyleProps {
  lines?: number;
  breaked?: boolean;
}

export const OverflowContainer = styled.p<OverflowStyleProps>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  -webkit-line-clamp: ${({ lines = 1 }) => lines};
  word-break: ${({ breaked }) => (breaked ? "break-all" : "initial")};
`;
