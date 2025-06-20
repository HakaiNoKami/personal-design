import { ButtonVariant } from "components";
import { Dialog } from "components/Dialog";
import type { ReactNode } from "react";
import { createContext, useCallback, useContext, useState } from "react";

export interface DialogDataProps {
  title: string;
  description: string;
  callback: () => void | Promise<void>;
}

export interface DialogContextProps {
  confirm: (data: DialogDataProps) => void;
}

export interface DialogProviderProps {
  children: ReactNode;
}

const DialogContext = createContext<DialogContextProps>(
  {} as DialogContextProps
);

export const DialogProvider = ({ children }: DialogProviderProps) => {
  const [open, setOpen] = useState(false);
  const [confirmColor, setConfirmColor] = useState<ButtonVariant>("default");
  const [data, setData] = useState<DialogDataProps>();

  const confirm = useCallback((data: DialogDataProps) => {
    setOpen(true);
    setData(data);
    setConfirmColor("default");
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
          confirmColor={confirmColor}
          description={data?.description}
        />
      )}
    </DialogContext.Provider>
  );
};

export const useDialog = () => useContext(DialogContext);
