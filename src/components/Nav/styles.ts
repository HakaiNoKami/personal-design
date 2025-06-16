import styled from "styled-components";

export interface NavStyleProps {
  hasLabel?: boolean;
  isActive?: boolean;
}

export const Container = styled.li<NavStyleProps>`
  width: 100%;
  display: flex;
  align-items: center;
  height: ${({ hasLabel }) => (hasLabel ? "4.9rem" : "4.2rem")};
  gap: 0.4rem;
  padding: 0.4rem;
  border-radius: 0.4rem;
  background-color: ${({ isActive }) =>
    isActive ? "var(--white)" : "transparent"};

  &:hover {
    background: var(--white);
    box-shadow: 0 0.2rem 0.4rem var(--box-shadow),
      0 0.4rem 0.4rem var(--box-shadow);
  }

  cursor: pointer;
`;

export const IconContent = styled.div<Pick<NavStyleProps, "isActive">>`
  height: 3.2rem;
  width: 3.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ isActive }) =>
    isActive ? "var(--blue-dark-600)" : "var(--neutral-400)"};
`;

export const TitleContent = styled.div`
  max-width: 15.8rem;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.2rem;
  color: var(--neutral-400);
  text-transform: uppercase;
`;

export const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2rem;
  color: var(--neutral-600);

  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  white-space: normal;
  -webkit-line-clamp: 1;
  word-break: break-all;
`;
