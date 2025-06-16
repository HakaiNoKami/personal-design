import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    title: {
      type: "string",
      control: "text",
      description: "Título do alerta",
    },
    description: {
      type: "string",
      control: "text",
      description: "Descição do alerta",
    },
    variant: {
      control: "select",
      description: "Variante de cores do botão",
      options: ["success", "error", "warning", "info"],
    },
    fullwidth: {
      type: "boolean",
      control: "boolean",
      description: "Deve ocupar o tamanho máximo da caixa",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    title: "Success title",
    description: "Success description",
    variant: "success",
    fullwidth: false,
  },
};

export const Error: Story = {
  args: {
    title: "Error title",
    description: "Error description",
    variant: "error",
    fullwidth: false,
  },
};

export const Warning: Story = {
  args: {
    title: "Warning title",
    description: "Warning description",
    variant: "warning",
    fullwidth: false,
  },
};

export const Info: Story = {
  args: {
    title: "Info title",
    description: "Info description",
    variant: "info",
    fullwidth: false,
  },
};
