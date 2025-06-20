import { DarkGlobalStyles, LightGlobalStyles } from "global.styles";
import { DialogProvider } from "providers/Dialog/Dialog";
import { ToastProvider } from "providers/Toast/Toast";
import type { ReactNode } from "react";
import { createContext, useMemo } from "react";
import { I18nextProvider } from "react-i18next";
import { i18next } from "translations";
export interface ThemeConfig {
  theme?: "light" | "dark";
  lang?: "pt" | "en" | "es";
  toastConfig?: {
    position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    reverseOrder?: boolean;
  };
}

export interface ThemeContextProps {}

export interface ThemeProviderProps extends ThemeConfig {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeProvider = ({
  children,
  lang = "pt",
  theme = "light",
  toastConfig = { position: "bottom-right" },
}: ThemeProviderProps) => {
  const globalStyle = useMemo(() => {
    switch (theme) {
      case "dark":
        return <DarkGlobalStyles />;
      default:
        return <LightGlobalStyles />;
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{}}>
      <I18nextProvider i18n={{ ...i18next, language: lang }}>
        {globalStyle}
        <ToastProvider {...toastConfig}>
          <DialogProvider>{children}</DialogProvider>
        </ToastProvider>
      </I18nextProvider>
    </ThemeContext.Provider>
  );
};
