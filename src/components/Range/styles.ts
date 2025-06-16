import styled from "styled-components";

export interface RangeStyleProps {
  fullWidth?: boolean;
  readOnly?: boolean;
}

export const Container = styled.div<RangeStyleProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "max-content")};
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &:focus-within {
    outline: 0.2rem solid var(--gray);
  }

  > output {
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

export const RangeInput = styled.input.attrs({
  type: "range",
})`
  flex: 1;
`;
