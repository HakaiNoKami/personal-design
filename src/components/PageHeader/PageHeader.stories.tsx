import type { Meta, StoryObj } from "@storybook/react";
import { FileImg } from "assets";
import { Button } from "components/Button";
import PageHeader from "./PageHeader";

const meta: Meta<typeof PageHeader> = {
  title: "Components/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
  argTypes: {
    icon: { description: "Ícone do cabeçalho da página" },
    title: {
      type: "string",
      control: "text",
      description: "Título do cabeçalho da página",
    },
    description: {
      type: "string",
      control: "text",
      description: "Descrição do cabeçalho da página",
    },
    actions: { description: "Lista de botões do cabeçalho da página" },
  },
};

export default meta;

type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
  args: {
    title: "Default title",
    description: "Default description",
  },
};

export const Icon: Story = {
  args: {
    icon: <FileImg />,
    title: "Default title",
    description: "Default description",
  },
};

export const Actions: Story = {
  args: {
    icon: <FileImg />,
    title: "Default title",
    description: "Default description",
    actions: [
      <Button>First action</Button>,
      <Button outlined>Second action</Button>,
    ],
  },
};
