import type { Meta, StoryObj } from "@storybook/react";
import { Divisor } from "./Divisor";

const meta: Meta<typeof Divisor> = {
  title: "Components/Divisor",
  component: Divisor,
  tags: ["autodocs"],
  argTypes: {
    children: {
      type: "string",
      control: "text",
      description: "Texto no centro da divisão",
    },
    recoil: {
      type: "number",
      control: "number",
      description:
        "Valor de recuo da divisão para fora da caixa (padrão: 0rem)",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Divisor>;

export const Default: Story = {
  args: {},
};

export const Text: Story = {
  args: {
    children: "Center text",
  },
};

export const Recoil: Story = {
  args: {
    children: "Center text",
    recoil: 1,
  },
};
