import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { InfoIcon } from "assets";
import Nav from "./Nav";

const meta: Meta<typeof Nav> = {
  title: "Components/Nav",
  component: Nav,
  tags: ["autodocs"],
  argTypes: {
    label: {
      type: "string",
      control: "text",
      description: "Rótulo da navegação",
    },
    name: {
      type: "string",
      control: "text",
      description: "Nome da navegação",
    },
    icon: { description: "Ícone da navegação" },
    justIcon: {
      type: "boolean",
      control: "boolean",
      description: "Deve mostrar apenas o ícone",
    },
    onClick: {
      type: "function",
      description: "Nétodo acionado ao clicar na navegação",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Nav>;

export const Default: Story = {
  args: {
    name: "Default name",
    icon: <InfoIcon />,
    justIcon: false,
    onClick: action("onClick"),
  },
};

export const Label: Story = {
  args: {
    label: "Nav label",
    name: "Nav name",
    icon: <InfoIcon />,
    justIcon: false,
    onClick: action("onClick"),
  },
};
