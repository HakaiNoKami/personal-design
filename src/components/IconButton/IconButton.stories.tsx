import type { Meta, StoryObj } from "@storybook/react";
import { InfoIcon } from "assets";
import { IconButton } from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"],
  argTypes: {
    icon: { description: "Ícone do botão de ícone" },
    loading: {
      type: "boolean",
      control: "boolean",
      description: "Loading do botão de ícone",
    },
    variant: {
      control: "select",
      options: ["default", "success", "danger", "link"],
      description: "Variante de cores do botão de ícone",
    },
    disabled: {
      type: "boolean",
      control: "boolean",
      description: "Desabilitar o botão de ícone",
    },
    outlined: {
      type: "boolean",
      control: "boolean",
      description: "Deve ter estilo mais transparente",
    },
    filled: {
      type: "boolean",
      control: "boolean",
      description: "Deve ter estillo mais opaco",
    },
    small: {
      type: "boolean",
      control: "boolean",
      description: "Diminuir espaçamento interno do botão de ícone",
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    icon: <InfoIcon />,
    loading: false,
    variant: "default",
    disabled: false,
    outlined: false,
    filled: false,
    small: false,
  },
};

export const Text: Story = {
  args: {
    icon: <InfoIcon />,
    loading: false,
    variant: "text",
    disabled: false,
    outlined: false,
    filled: false,
    small: false,
  },
};

export const Success: Story = {
  args: {
    icon: <InfoIcon />,
    loading: false,
    variant: "success",
    disabled: false,
    outlined: false,
    filled: false,
    small: false,
  },
};

export const Danger: Story = {
  args: {
    icon: <InfoIcon />,
    loading: false,
    variant: "danger",
    disabled: false,
    outlined: false,
    filled: false,
    small: false,
  },
};
