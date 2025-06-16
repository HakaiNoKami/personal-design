import type { IframeHTMLAttributes, ReactNode } from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { IframeContainer } from "./styles";

export interface IframeProps extends IframeHTMLAttributes<HTMLIFrameElement> {
  children: ReactNode;
}

export const Iframe = ({ children, ...args }: IframeProps) => {
  const [contentRef, setContentRef] = useState<HTMLIFrameElement | null>(null);

  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <IframeContainer {...args} ref={setContentRef}>
      {mountNode && createPortal(children, mountNode)}
    </IframeContainer>
  );
};

export default Iframe;
