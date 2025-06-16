import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from "assets";
import type { ReactNode } from "react";
import type { AlertStyleProps, AlertVariant } from "./styles";
import { Container, IconContent, InfoContent } from "./styles";

export interface AlertProps extends Omit<AlertStyleProps, "noDescription"> {
  title: string;
  description?: ReactNode;
}

const getIconByVariant = (variant?: AlertVariant) => {
  switch (variant) {
    case "error":
      return <ErrorIcon />;
    case "warning":
      return <WarningIcon />;
    case "info":
      return <InfoIcon />;
    default:
      return <SuccessIcon />;
  }
};

export const Alert = ({ title, description, ...args }: AlertProps) => {
  return (
    <Container {...args}>
      <IconContent>{getIconByVariant(args.variant)}</IconContent>
      <InfoContent noDescription={!description}>
        <p>
          <b>{title}</b>
        </p>
        {description}
      </InfoContent>
    </Container>
  );
};

export default Alert;
