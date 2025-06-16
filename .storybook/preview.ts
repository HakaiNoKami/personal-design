import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import { LightGlobalStyles as GlobalStyles } from "../src/global.styles";

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
];

const preview: Preview = {
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
