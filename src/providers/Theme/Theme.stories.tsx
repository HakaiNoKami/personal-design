import type { Meta } from "@storybook/react";
import { ThemeProvider } from "./Theme";

const meta: Meta<typeof ThemeProvider> = {
  title: "Providers/Theme",
  component: ThemeProvider,
  argTypes: {
    toastConfig: {
      control: {
        type: "object",
      },
      description: "Options for toast notifications",
      defaultValue: {
        position: "top-right",
        autoClose: 5000,
      },
    },
    commonTextConfig: {
      control: {
        type: "object",
      },
      description: "Options for toast notifications",
      defaultValue: {
        inputFile: { description: "", button: "" },
        select: { selectAll: "", noOption: "" },
        table: { total: "" },
        dialog: { cancel: "", confirm: "" },
      },
    },
  },
};

export default meta;
