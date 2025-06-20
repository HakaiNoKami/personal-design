import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import { Suspense, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { Loading } from "../src/components";
import { LightGlobalStyles as GlobalStyles } from "../src/global.styles";
import { i18next } from "../src/translations";

export const globalTypes = {
  locale: {
    name: "Localização",
    toolbar: {
      icon: "globe",
      items: [
        { value: "pt", title: "Português" },
        { value: "en", title: "Inglês" },
        { value: "es", title: "Espanhol" },
      ],
      showName: true,
    },
  },
};

const withI18next = (Story, context) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18next.changeLanguage(locale);
  }, [locale]);

  return (
    <Suspense fallback={<Loading />}>
      <I18nextProvider i18n={i18next}>
        <Story />
      </I18nextProvider>
    </Suspense>
  );
};

const preview: Preview = {
  decorators: [
    withI18next,
    withThemeFromJSXProvider({
      GlobalStyles,
    }),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
