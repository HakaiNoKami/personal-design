import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { FormGroup } from "components/FormGroup";
import { Input } from "components/Input";
import { Form } from "./Form";

const meta: Meta<typeof Form> = {
  title: "Components/Form",
  component: Form,
  tags: ["autodocs"],
  argTypes: {
    children: { description: "Conteúdo do formulário" },
    title: {
      type: "string",
      control: "text",
      description: "Título do formulário",
    },
    direction: {
      control: "select",
      options: ["vertical", "horizontal"],
      description: "Direção dos campos dor formulário",
    },
    spacing: {
      type: "number",
      control: "number",
      description: "Espaçamento dos campos do formulário (padrão: 0rem)",
    },
    onSubmit: {
      type: "function",
      description:
        "Ação acionada quando um botão tipo 'submit' for acionado dentro do formulário",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Horizontal: Story = {
  args: {
    children: (
      <>
        <FormGroup label="Name">
          <Input fullWidth disabled />
        </FormGroup>
        <FormGroup label="Last name">
          <Input fullWidth disabled />
        </FormGroup>
        <FormGroup label="E-mail">
          <Input fullWidth disabled />
        </FormGroup>
      </>
    ),
    title: "Horizontal form",
    direction: "horizontal",
    spacing: 1.6,
    onSubmit: action("onSubmit"),
  },
};

export const Vertical: Story = {
  args: {
    children: (
      <>
        <FormGroup label="Name">
          <Input fullWidth disabled />
        </FormGroup>
        <FormGroup label="Last name">
          <Input fullWidth disabled />
        </FormGroup>
        <FormGroup label="E-mail">
          <Input fullWidth disabled />
        </FormGroup>
      </>
    ),
    title: "Vertical form",
    direction: "vertical",
    spacing: 1.6,
    onSubmit: action("onSubmit"),
  },
};
