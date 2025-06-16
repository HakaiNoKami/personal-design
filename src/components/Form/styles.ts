import styled, { css } from "styled-components";

export interface FormStyleProps {
  direction?: "vertical" | "horizontal";
  spacing?: number;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.8rem;
`;

export const TitleForm = styled.div`
  font-size: 2rem;
  line-height: 3rem;
  letter-spacing: 0.75%;
  color: var(--text-title);
`;

export const FormContent = styled.form<FormStyleProps>`
  width: 100%;
  height: 100%;
  display: flex;
  gap: ${({ spacing = 0 }) => `${spacing}rem`};

  ${({ direction = "vertical" }) => {
    switch (direction) {
      case "horizontal":
        return css`
          justify-content: start;
          align-items: flex-end;
          flex-direction: row;
        `;
      default:
        return css`
          justify-content: start;
          align-items: flex-start;
          flex-direction: column;
        `;
    }
  }}
`;
