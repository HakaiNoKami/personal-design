import type { FormEventHandler, ReactNode } from "react";
import { forwardRef } from "react";
import type { FormStyleProps } from "./styles";
import { Container, FormContent, TitleForm } from "./styles";

export interface FormProps extends FormStyleProps {
  children: ReactNode;
  title?: string;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}

export const Form = forwardRef<HTMLFormElement, FormProps>(
  ({ children, title, onSubmit, direction, spacing, ...args }, ref) => {
    return (
      <Container {...args}>
        {title && <TitleForm>{title}</TitleForm>}
        <FormContent
          ref={ref}
          spacing={spacing}
          direction={direction}
          onSubmit={(e) => onSubmit?.(e)}
        >
          {children}
        </FormContent>
      </Container>
    );
  }
);

export default Form;
