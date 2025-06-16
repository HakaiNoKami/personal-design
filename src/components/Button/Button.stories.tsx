import type { Meta, StoryObj } from "@storybook/react";
import { InfoIcon } from "assets";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: { description: "Conteúdo do botão" },
    loading: {
      type: "boolean",
      control: "boolean",
      description: "Loading do botão",
    },
    icon: {
      description: "Ícone do botão",
    },
    variant: {
      control: "select",
      description: "Variante de cores do botão",
      options: ["default", "success", "danger", "link"],
    },
    fullWidth: {
      type: "boolean",
      control: "boolean",
      description: "Deve ocupar o tamanho máximo da caixa",
    },
    minWidth: {
      type: "boolean",
      control: "boolean",
      description: "Deve ter um tamanho mínimo de 12rem",
    },
    small: {
      type: "boolean",
      control: "boolean",
      description: "Diminuir o espaçamento interno do botão",
    },
    bordered: {
      type: "boolean",
      control: "boolean",
      description: "Deve ter o estilo com bordas",
    },
    outlined: {
      type: "boolean",
      control: "boolean",
      description: "Deve ter o estilo mais transparente",
    },
    disabled: {
      type: "boolean",
      control: "boolean",
      description: "Desabilitar o botão",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: <p>Default content</p>,
    loading: false,
    icon: <InfoIcon />,
    variant: "default",
    fullWidth: false,
    minWidth: false,
    small: false,
    bordered: false,
    outlined: false,
    disabled: false,
  },
};

export const Success: Story = {
  args: {
    children: <p>Success content</p>,
    loading: false,
    icon: <InfoIcon />,
    variant: "success",
    fullWidth: false,
    minWidth: false,
    small: false,
    bordered: false,
    outlined: false,
    disabled: false,
  },
};

export const Danger: Story = {
  args: {
    children: <p>Danger content</p>,
    loading: false,
    icon: <InfoIcon />,
    variant: "danger",
    fullWidth: false,
    minWidth: false,
    small: false,
    bordered: false,
    outlined: false,
    disabled: false,
  },
};

export const Link: Story = {
  args: {
    children: <p>Link content</p>,
    loading: false,
    icon: <InfoIcon />,
    variant: "link",
    fullWidth: false,
    minWidth: false,
    small: false,
    bordered: false,
    outlined: false,
    disabled: false,
  },
};
