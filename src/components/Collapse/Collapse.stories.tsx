import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { Collapse } from "./Collapse";

const meta: Meta<typeof Collapse> = {
  title: "Components/Collapse",
  component: Collapse,
  tags: ["autodocs"],
  argTypes: {
    children: { description: "Conteúdo do collapse" },
    text: { description: "Conteúdo do texto do collapse" },
    defaultOpen: {
      type: "boolean",
      control: "boolean",
      description:
        "Valor inicial de abertura do collapse (caso não queira controlar o collapse)",
    },
    open: {
      type: "boolean",
      control: "boolean",
      description:
        "Valor de abertura do collapse (caso queira controlar o collapse)",
    },
    onCollapse: {
      type: "function",
      description: "Retorna o valor de abertura do collapse",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Collapse>;

export const Uncontrolled: Story = {
  args: {
    children: <p>Default content</p>,
    text: <p>Default text</p>,
    defaultOpen: false,
  },
};

export const Controlled: Story = {
  args: {
    children: <p>Controlled content</p>,
    text: <p>Controlled text</p>,
    open: false,
    onCollapse: action("onCollapse"),
  },
};
