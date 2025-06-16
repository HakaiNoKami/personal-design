import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {
    title: {
      type: "string",
      control: "text",
      description: "Título do taost",
    },
    description: {
      type: "string",
      control: "text",
      description: "Descrição do toast",
    },
    actionText: {
      type: "string",
      control: "text",
      description: "Texto do botão de ação do toast",
    },
    fixed: {
      type: "string",
      control: "text",
      description:
        "Deve manter o toast fixo, ignorando a regra de acionar o método onClose após 3s",
    },
    actionCallback: {
      type: "function",
      description: "Método acionado ao clicar no botão de ação do toast",
    },
    onClose: {
      type: "function",
      description: "Método acionado ao clicar em '✖' ou após 3s",
    },
    variant: {
      control: "select",
      options: ["success", "error", "warning", "info"],
      description: "Variante de cores do toast",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toast>;

export const Info: Story = {
  args: {
    title: "Info title",
    description: "Info description",
    variant: "info",
    onClose: action("onClose"),
  },
};

export const Success: Story = {
  args: {
    title: "Success title",
    description: "Success description",
    variant: "success",
    onClose: action("onClose"),
  },
};

export const Warning: Story = {
  args: {
    title: "Warning title",
    description: "Warning description",
    variant: "warning",
    onClose: action("onClose"),
  },
};

export const Error: Story = {
  args: {
    title: "Error title",
    description: "Error description",
    variant: "error",
    onClose: action("onClose"),
  },
};

export const Action: Story = {
  args: {
    title: "Action title",
    description: "Action description",
    actionText: "action text",
    actionCallback: action("actionCallback"),
    variant: "info",
    onClose: action("onClose"),
  },
};
