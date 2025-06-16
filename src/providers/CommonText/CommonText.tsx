import type { ReactNode } from "react";
import { createContext, useContext } from "react";

export interface CommonTextDataProps {
  inputFile?: { description: string; button: string };
  select?: { selectAll: string; noOption: string };
  table?: { total: string };
  dialog?: { cancel: string; confirm: string };
}

export interface CommonTextContextProps extends CommonTextDataProps {}

export interface CommonTextProviderProps extends CommonTextDataProps {
  children: ReactNode;
}

const CommonTextContext = createContext<CommonTextContextProps>(
  {} as CommonTextContextProps
);

export const CommonTextProvider = ({
  children,
  ...args
}: CommonTextProviderProps) => {
  return (
    <CommonTextContext.Provider value={{ ...args }}>
      {children}
    </CommonTextContext.Provider>
  );
};

export const useCommonText = () => useContext(CommonTextContext);
