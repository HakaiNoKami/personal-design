import type { Meta, StoryObj } from "@storybook/react";
import { InfoIcon } from "assets";
import { Button } from "components/Button";
import { Tag } from "components/Tag";
import { CardInfo } from "./CardInfo";

const meta: Meta<typeof CardInfo> = {
  title: "Components/CardInfo",
  component: CardInfo,
  tags: ["autodocs"],
  argTypes: {
    icon: {
      description: "Ícone do cartão de informações",
    },
    tag: {
      description: "Tag do cartão de informações",
    },
    title: {
      type: "string",
      control: "text",
      description: "Título do cartão de informações",
    },
    description: {
      type: "string",
      control: "text",
      description: "Descrição do cartão de informações",
    },
    button: {
      description: "Botão do cartão de informações",
    },
    fullWidth: {
      type: "boolean",
      control: "boolean",
      description: "Deve ocupar o tamanho máximo da caixa",
    },
    fullWHeight: {
      type: "boolean",
      control: "boolean",
      description: "Deve ocupar a altura máxima da caixa",
    },
  },
};

export default meta;

type Story = StoryObj<typeof CardInfo>;

export const Default: Story = {
  args: {
    icon: <InfoIcon />,
    tag: <Tag variant="primary">Default tag</Tag>,
    title: "Default title",
    description: "Default description",
    button: <Button bordered>Default button</Button>,
    fullWidth: false,
    fullWHeight: false,
  },
};
