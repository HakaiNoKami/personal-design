import type { ButtonVariant } from "components/Button";
import { Dialog } from "components/Dialog";
import type { ReactNode } from "react";
import { createContext, useCallback, useContext, useState } from "react";

export interface DialogDataProps {
  title: string;
  description: string;
  cancelText?: string;
  confirmText?: string;
  confirmColor?: ButtonVariant;
  callback: () => void | Promise<void>;
}

export interface DialogContextProps {
  confirm: (data: DialogDataProps) => void;
}

export interface DialogProviderProps {
  children: ReactNode;
  cancelText?: string;
  confirmText?: string;
}

const DialogContext = createContext<DialogContextProps>(
  {} as DialogContextProps
);

export const DialogProvider = ({ children, ...args }: DialogProviderProps) => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<DialogDataProps>();

  const confirm = useCallback((data: DialogDataProps) => {
    setData(data);
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setData(undefined);
  }, []);

  const handleConfirm = useCallback(() => {
    data?.callback?.();
    handleClose();
  }, [data, handleClose]);

  return (
    <DialogContext.Provider value={{ confirm }}>
      {children}
      {data && (
        <Dialog
          show={open}
          title={data?.title}
          onCancel={handleClose}
          onConfirm={handleConfirm}
          description={data?.description}
          confirmColor={data?.confirmColor}
          cancelText={data?.cancelText ?? args.cancelText}
          confirmText={data?.confirmText ?? args.confirmText}
        />
      )}
    </DialogContext.Provider>
  );
};

export const useDialog = () => useContext(DialogContext);
