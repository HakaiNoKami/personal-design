import type { Meta, StoryObj } from "@storybook/react";
import { FileImg } from "assets";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    src: {
      type: "string",
      control: "text",
      description: "URL da imagem do avatar",
    },
    icon: {
      description: "Ícone para caso não haja uma URL",
    },
    small: {
      type: "boolean",
      control: "boolean",
      description: "Diminuir o espaçamento interno do avatar",
    },
    squared: {
      type: "boolean",
      control: "boolean",
      description: "Deve ser em forma de retrato",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: "https://static.vecteezy.com/ti/vetor-gratis/p1/2275847-avatar-masculino-perfil-icone-de-homem-caucasiano-sorridente-vetor.jpg",
    icon: <FileImg />,
    small: false,
    squared: false,
  },
};

export const EmptyURL: Story = {
  args: {
    src: "",
    icon: <FileImg />,
    small: false,
    squared: false,
  },
};
