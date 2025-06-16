import {
  CloseIcon,
  ErrorIcon,
  InfoIcon,
  SuccessIcon,
  WarningIcon,
} from "assets";
import { useEffect, useMemo, useRef } from "react";
import type { ToastStyleProps } from "./styles";
import {
  CloseButton,
  Container,
  CustomButton,
  IconContent,
  InfoContent,
  TitleContent,
} from "./styles";

export interface ToastProps extends ToastStyleProps {
  title?: string;
  description: string;
  actionText?: string;
  fixed?: boolean;
  actionCallback?: () => void;
  onClose?: () => void;
}

const toastTime = 3000;

export const Toast = ({
  variant = "success",
  title,
  description,
  actionText,
  fixed,
  actionCallback,
  onClose,
  ...args
}: ToastProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const icon = useMemo(() => {
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
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRef = ref?.current;

    if (fixed) return;

    const callAsyncFunction = async () => {
      await new Promise(() => {
        timer = setTimeout(() => onClose?.(), toastTime);
        currentRef?.addEventListener("mouseenter", () => {
          clearTimeout(timer);
        });
        currentRef?.addEventListener("mouseleave", () => {
          timer = setTimeout(() => onClose?.(), toastTime / 2);
        });
      });
    };

    callAsyncFunction();

    return () => {
      clearTimeout(timer);
    };
  }, [fixed, onClose]);

  return (
    <Container {...args} variant={variant} ref={ref}>
      <IconContent variant={variant}>{icon}</IconContent>
      <InfoContent>
        <TitleContent>
          <p>
            <b>{title}</b>
          </p>
          <CloseButton icon={<CloseIcon />} onClick={onClose} />
        </TitleContent>
        <p title={description}>{description}</p>
        {actionText && actionCallback && (
          <CustomButton onClick={actionCallback}>{actionText}</CustomButton>
        )}
      </InfoContent>
    </Container>
  );
};

export default Toast;
