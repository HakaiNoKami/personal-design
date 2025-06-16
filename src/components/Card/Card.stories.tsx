import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    children: { description: "Conteúdo do cartão" },
    title: {
      type: "string",
      control: "text",
      description: "Título do cartão",
    },
    description: {
      type: "string",
      control: "text",
      description: "Descrição do cartão",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: <p>Default content</p>,
    title: "Default title",
    description: "Default description",
  },
};

export const EmptyDescription: Story = {
  args: {
    children: <p>Empty content</p>,
    title: "Empty title",
  },
};
