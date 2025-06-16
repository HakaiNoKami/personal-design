import type { ToastProps, ToastVariant } from "components/Toast";
import { Toast } from "components/Toast";
import { useMap } from "hooks";
import type { ReactNode } from "react";
import { createContext, useCallback, useContext, useMemo } from "react";
import { generateUID } from "utils";
import type { ToastProviderStyleProps } from "./styles";
import { Container } from "./styles";

export interface ToastDataProps extends ToastProviderStyleProps {}

export interface CreateToastProps extends Omit<ToastProps, "removeMe"> {}

export interface ToastContextProps {
  success: (args: CreateToastProps) => void;
  error: (args: CreateToastProps) => void;
  warning: (args: CreateToastProps) => void;
  info: (args: CreateToastProps) => void;
  clearToasts: () => void;
}

export interface ToastProviderProps extends ToastDataProps {
  children: ReactNode;
}

const ToastContext = createContext<ToastContextProps>({} as ToastContextProps);

export const ToastProvider = ({ children, ...args }: ToastProviderProps) => {
  const [toasts, { add, clear, remove }] = useMap<string, ToastProps>();

  const createToast = useMemo(
    () =>
      function (this: ToastVariant, args: CreateToastProps): void {
        const id = generateUID();

        add(id, {
          ...args,
          variant: this,
          onClose: () => remove(id),
          title: args.title ?? this,
        });
      },
    [add, remove]
  );

  const success = useMemo(() => createToast.bind("success"), [createToast]);
  const error = useMemo(() => createToast.bind("error"), [createToast]);
  const warning = useMemo(() => createToast.bind("warning"), [createToast]);
  const info = useMemo(() => createToast.bind("info"), [createToast]);

  const clearToasts = useCallback(() => clear(), [clear]);

  return (
    <ToastContext.Provider
      value={{ success, error, warning, info, clearToasts }}
    >
      <Container {...args}>
        {Array.from(toasts ?? [])?.map(([id, props]) => (
          <Toast {...props} key={id} />
        ))}
      </Container>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
