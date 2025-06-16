import styled, { css } from "styled-components";

export type AlertVariant = "success" | "error" | "warning" | "info";

export interface AlertStyleProps {
  variant?: AlertVariant;
  fullwidth?: boolean;
  noDescription?: boolean;
}

const getColorsByType = (variant: AlertVariant) => {
  switch (variant) {
    case "error":
      return ["var(--red-light-600)", "var(--red-light-100)"];
    case "warning":
      return ["var(--yellow-light-600)", "var(--yellow-light-100)"];
    case "info":
      return ["var(--cyan-light-600)", "var(--cyan-light-100)"];
    default:
      return ["var(--green-light-600)", "var(--green-light-100)"];
  }
};

export const Container = styled.div<Omit<AlertStyleProps, "noDescription">>`
  width: ${({ fullwidth }) => (fullwidth ? "100%" : "initial")};
  min-width: 30rem;
  padding: 1.6rem;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  gap: 1.6rem;
  border-radius: 0.4rem;

  ${({ variant = "success" }) => {
    const [color, bg] = getColorsByType(variant);

    return css`
      background-color: ${bg};
      border: 0.1rem solid ${color};
      color: ${color};
    `;
  }}
`;

export const IconContent = styled.div`
  width: 2.4rem;
  height: 2.4rem;
`;

export const InfoContent = styled.div<Pick<AlertStyleProps, "noDescription">>`
  flex: 1;
  font-size: 1.4rem;
  line-height: 2rem;

  > p:first-child {
    line-height: 2.4rem;
  }

  ${({ noDescription }) =>
    noDescription &&
    css`
      > p:first-child b {
        font-weight: normal;
      }
    `}
`;
