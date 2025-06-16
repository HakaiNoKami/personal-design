import type { Meta, StoryObj } from "@storybook/react";
import { EmptyList } from "./EmptyList";

const meta: Meta<typeof EmptyList> = {
  title: "Components/EmptyList",
  component: EmptyList,
  tags: ["autodocs"],
  argTypes: {
    title: {
      type: "string",
      control: "text",
      description: "Título da lista vazia",
    },
    description: {
      type: "string",
      control: "text",
      description: "Descrição da lista vazia",
    },
  },
};

export default meta;

type Story = StoryObj<typeof EmptyList>;

export const Default: Story = {
  args: {
    title: "Title empty list",
    description: "Description empty list",
  },
};
