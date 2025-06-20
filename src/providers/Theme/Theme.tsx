import { DarkGlobalStyles, LightGlobalStyles } from "global.styles";
import { CommonTextProvider } from "providers/CommonText/CommonText";
import { DialogProvider } from "providers/Dialog/Dialog";
import { ToastProvider } from "providers/Toast/Toast";
import type { ReactNode } from "react";
import { createContext, useMemo } from "react";

export interface ThemeContextProps {}

export interface ThemeProviderProps {
  children: ReactNode;
  theme?: "light" | "dark";
  toastConfig: {
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    reverseOrder?: boolean;
  };
  commonTextConfig: {
    inputFile?: { description: string; button: string };
    select?: { selectAll: string; noOption: string };
    table?: { total: string };
    dialog?: { cancel: string; confirm: string };
  };
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeProvider = ({
  children,
  theme = "light",
  toastConfig,
  commonTextConfig,
}: ThemeProviderProps) => {
  const globalStyle = useMemo(() => {
    switch (theme) {
      case "dark":
        return <DarkGlobalStyles />;
      default:
        return <LightGlobalStyles />;
    }
  }, []);

  return (
    <ThemeContext.Provider value={{}}>
      {globalStyle}
      <CommonTextProvider {...commonTextConfig}>
        <ToastProvider {...toastConfig}>
          <DialogProvider
            cancelText={commonTextConfig.dialog?.cancel}
            confirmText={commonTextConfig.dialog?.confirm}
          >
            {children}
          </DialogProvider>
        </ToastProvider>
      </CommonTextProvider>
    </ThemeContext.Provider>
  );
};
