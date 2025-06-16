import type { ReactNode } from "react";
import { Container, ErrorForm, LabelForm } from "./styles";

export interface FormGroupProps {
  children: ReactNode;
  label?: string;
  error?: string;
  required?: boolean;
}

export const FormGroup = ({
  children,
  label,
  error,
  required,
  ...args
}: FormGroupProps) => {
  return (
    <Container {...args}>
      {label && (
        <LabelForm>
          {label}
          {required && <span> *</span>}
        </LabelForm>
      )}
      {children}
      {error && <ErrorForm>{error}</ErrorForm>}
    </Container>
  );
};

export default FormGroup;
