import type { ReactNode } from "react";

export interface StepProps {
  children: ReactNode;
  title: string;
}

export const Step = ({ children }: StepProps) => children;

export default Step;
