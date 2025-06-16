import type { ReactNode } from "react";
import { Children, cloneElement, isValidElement } from "react";
import { ActionsContent, Container, IconContent, InfoContent } from "./styles";

export interface PageHeaderProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  actions?: ReactNode[];
}

export const PageHeader = ({
  icon,
  title,
  description,
  actions,
}: PageHeaderProps) => {
  return (
    <Container>
      {icon && <IconContent>{icon}</IconContent>}
      <InfoContent>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </InfoContent>
      {actions && (
        <ActionsContent>
          {Children.map(actions.reverse(), (child, index) => {
            if (isValidElement(child))
              return cloneElement(child, { key: index });
          })}
        </ActionsContent>
      )}
    </Container>
  );
};

export default PageHeader;
