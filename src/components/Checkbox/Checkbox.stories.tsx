import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: {
      type: "string",
      control: "text",
      description: "Texto do checkbox",
    },
    name: {
      type: "string",
      control: "text",
      description: "Nome do campo",
    },
    defaultChecked: {
      type: "boolean",
      control: "boolean",
      description:
        "Valor inicial do campo (caso não queira controlar o checkbox)",
    },
    checked: {
      type: "boolean",
      control: "boolean",
      description: "Valor do campo (caso queira controlar o checkbox)",
    },
    onChange: {
      type: "function",
      description:
        "Ação acionada ao clicar no checkbox que retorna o valor/estado atual do campo",
    },
    noWrap: {
      type: "boolean",
      control: "boolean",
      description: "Não deve quebrar a linha do texto",
    },
    maxContent: {
      type: "boolean",
      control: "boolean",
      description: "O checkbox deve ter um tamanho relativo ao conteúdo",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Uncontrolled: Story = {
  args: {
    label: "Campo com controle interno",
    name: "Uncontrolled",
    defaultChecked: true,
    noWrap: true,
    maxContent: true,
  },
};

export const Controlled: Story = {
  args: {
    label: "Campo com controle externo",
    name: "Controlled",
    checked: true,
    onChange: action("onChange"),
    noWrap: false,
    maxContent: false,
  },
};
