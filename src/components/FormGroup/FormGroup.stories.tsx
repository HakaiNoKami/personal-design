import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "components/Input";
import { FormGroup } from "./FormGroup";

const meta: Meta<typeof FormGroup> = {
  title: "Components/FormGroup",
  component: FormGroup,
  tags: ["autodocs"],
  argTypes: {
    children: { description: "Conteúdo do formulário" },
    label: {
      type: "string",
      control: "text",
      description: "Rótulo do campo",
    },
    error: {
      type: "string",
      control: "text",
      description: "Erro do campo",
    },
    required: {
      type: "boolean",
      control: "boolean",
      description:
        "Deve adicionar o marcador vermelho indicando que o campo é obrigatório",
    },
  },
};

export default meta;

type Story = StoryObj<typeof FormGroup>;

export const Required: Story = {
  args: {
    children: <Input disabled />,
    label: "E-mail",
    error: "",
    required: true,
  },
};

export const Error: Story = {
  args: {
    children: <Input disabled value="ex@ex.ex" />,
    label: "E-mail",
    error: "Enter a valid email address",
    required: false,
  },
};
