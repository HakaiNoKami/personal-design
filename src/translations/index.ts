import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const i18nLanguage = "i18nextLng";
const languages = ["pt", "en", "es"];

import commonsEN from "./en/commons.json";
import commonsES from "./es/commons.json";
import commonsPT from "./pt/commons.json";

const resources = {
  pt: { commons: commonsPT },
  en: { commons: commonsEN },
  es: { commons: commonsES },
};

i18next.use(initReactI18next).init({
  debug: false,
  ns: ["commons"],
  defaultNS: "commons",
  fallbackNS: "commons",
  fallbackLng: languages,
  detection: {
    lookupLocalStorage: i18nLanguage,
  },
  interpolation: {
    escapeValue: false,
  },
  resources,
  returnNull: false,
});

export { i18next };

export default i18next;
