import { LeftArrowIcon } from "assets";
import type { ReactNode } from "react";
import { useCallback, useState } from "react";
import { Container, IconContent, SummaryContent, TextContent } from "./styles";

export interface CollapseProps {
  children: ReactNode;
  text: ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onCollapse?: (open: boolean) => void;
}

export const Collapse = ({
  children,
  text,
  defaultOpen,
  open,
  onCollapse,
}: CollapseProps) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen ?? false);

  const onToggleCollapse = useCallback(() => {
    const value = open ?? internalOpen;
    setInternalOpen(!value);
    onCollapse?.(!value);
  }, [internalOpen, open, onCollapse]);

  return (
    <Container>
      <SummaryContent onClick={onToggleCollapse}>
        <TextContent>{text}</TextContent>
        <IconContent isOpen={open ?? internalOpen}>
          <LeftArrowIcon />
        </IconContent>
      </SummaryContent>
      {(open ?? internalOpen) && children}
    </Container>
  );
};

export default Collapse;
