import { DarkGlobalStyles, LightGlobalStyles } from "global.styles";
import type { CommonTextDataProps } from "providers/CommonText";
import { CommonTextProvider } from "providers/CommonText/CommonText";
import { DialogProvider } from "providers/Dialog/Dialog";
import type { ToastDataProps } from "providers/Toast";
import { ToastProvider } from "providers/Toast/Toast";
import type { ReactNode } from "react";
import { createContext, useMemo } from "react";

export interface ThemeContextProps {}

export type ThemeProviderProps = {
  children: ReactNode;
  theme?: "light" | "dark";
  toastConfig: ToastDataProps;
  commonTextConfig: CommonTextDataProps;
};

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
