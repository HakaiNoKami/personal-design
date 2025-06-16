import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "./Box";

const meta: Meta<typeof Box> = {
  title: "Components/Box",
  component: Box,
  tags: ["autodocs"],
  argTypes: {
    children: { description: "Conteúdo da box" },
    padding: {
      type: "number",
      control: "number",
      description: "Espaçamento interno (padrão: 1.6rem)",
    },
    radius: {
      type: "number",
      control: "number",
      description: "Tamanho do arredondamento das bordas (padrão: 0rem)",
    },
    fullHeight: {
      type: "boolean",
      control: "boolean",
      description: "Deve ocupar a altura máxima da caixa",
    },
    variant: {
      control: "select",
      description: "Variante de cores da caixa",
      options: ["default", "neutral"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: <p>Box content</p>,
    padding: 1.6,
    radius: 0.4,
    fullHeight: true,
    variant: "default",
  },
};

export const Neutral: Story = {
  args: {
    children: <p>Box content</p>,
    padding: 1.6,
    radius: 0,
    fullHeight: false,
    variant: "neutral",
  },
};
