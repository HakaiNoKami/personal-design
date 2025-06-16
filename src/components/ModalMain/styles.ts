import styled from "styled-components";

export interface ModalMainStyleProps {
  noOverflow?: boolean;
}

export const Container = styled.main<ModalMainStyleProps>`
  position: relative;
  width: 100%;
  max-height: calc(80vh - 7.3rem);
  transition: height ease-in-out 0.2s;
  padding: 1.6rem;
  overflow-y: ${({ noOverflow }) => (noOverflow ? "initial" : "auto")};
`;
