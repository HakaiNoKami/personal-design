import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { InfoIcon } from "assets";
import { Chip } from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Components/Chip",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {
    children: { description: "Conteúdo do chip" },
    icon: {
      description: "Ícone do chip",
    },
    onClose: {
      type: "function",
      description: "Ação acionada ao clicar no botão '✖'",
    },
    variant: {
      control: "select",
      description: "Variações do chip",
      options: ["default", "success", "danger"],
    },
    bordered: {
      type: "boolean",
      control: "boolean",
      description: "Deve ter o estilo com bordas",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    children: <p>Default content</p>,
    icon: <InfoIcon />,
    variant: "default",
    bordered: false,
  },
};

export const Success: Story = {
  args: {
    children: <p>Success content</p>,
    icon: <InfoIcon />,
    onClose: action("onClose"),
    variant: "success",
    bordered: false,
  },
};

export const Danger: Story = {
  args: {
    children: <p>Danger content</p>,
    icon: <InfoIcon />,
    onClose: action("onClose"),
    variant: "danger",
    bordered: false,
  },
};
