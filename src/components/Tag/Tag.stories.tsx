import type { Meta, StoryObj } from "@storybook/react";
import { InfoIcon } from "assets";
import Tag from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Components/Tag",
  component: Tag,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Conteúdo da tag",
    },
    icon: {
      description: "Ícone da tag",
    },
    variant: {
      control: "select",
      options: ["primary", "success", "danger", "default"],
      description: "Variante de cores da tag",
    },
    filled: {
      type: "boolean",
      control: "boolean",
      description: "Deve ter o estilo mais opaco",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: <p>Default tag content</p>,
    icon: <InfoIcon />,
    variant: "default",
    filled: false,
  },
};

export const Primary: Story = {
  args: {
    children: <p>Primary tag content</p>,
    icon: <InfoIcon />,
    variant: "primary",
    filled: false,
  },
};

export const Success: Story = {
  args: {
    children: <p>Success tag content</p>,
    icon: <InfoIcon />,
    variant: "success",
    filled: false,
  },
};

export const Danger: Story = {
  args: {
    children: <p>Danger tag content</p>,
    icon: <InfoIcon />,
    variant: "danger",
    filled: false,
  },
};
