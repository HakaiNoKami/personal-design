import styled from "styled-components";

export interface CardInfoStyleProps {
  fullWidth?: boolean;
  fullWHeight?: boolean;
  onClick?: () => void;
}

export const Container = styled.div<CardInfoStyleProps>`
  min-width: 22.6rem;
  height: ${({ fullWHeight }) => (fullWHeight ? "100%" : "auto")};
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  padding: 1.6rem;
  border-radius: 0.4rem;
  border: 1px solid var(--gray);
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  cursor: ${({ onClick }) => (onClick ? "pointer" : "inintial")};
`;

export const IconContainer = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background-color: var(--blue-dark-600);
  color: var(--white);
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Main = styled.main`
  min-height: 4.4rem;
  text-align: left;

  p {
    font-weight: bold;
    color: var(--text-title);
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  span {
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

export const Footer = styled.footer`
  width: 100%;
  margin-top: 2rem;
`;
