import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import type { ChangeEvent } from "react";
import { useCallback, useState } from "react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {
    value: {
      type: "string",
      control: "text",
      description:
        "Valor do campo de entrada (caso queira controlar o campo de texto)",
    },
    defaultValue: {
      type: "string",
      control: "text",
      description:
        "Valor do campo de entrada (caso não queira controlar o campo de texto)",
    },
    rows: {
      type: "number",
      control: "number",
      description: "Número de linhas do campo de texto (padrão: 3)",
    },
    maxLength: {
      type: "number",
      control: "number",
      description: "Número máximo de caracteres permitidos",
    },
    onChange: {
      type: "function",
      description: "Método acionado ao editar o conteúdo do campo de texto",
    },
    fullWidth: {
      type: "boolean",
      control: "boolean",
      description: "Deve ocupar o tamanho máximo da caixa",
    },
    readOnly: {
      type: "boolean",
      control: "boolean",
      description: "Deve permitir somente leitura do campo de texto",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Uncontrolled: Story = {
  args: {
    defaultValue: "uncontrolled",
    rows: 3,
    onChange: action("onChange"),
    fullWidth: false,
    readOnly: false,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);

    const onChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
      setValue(e.target.value);
      action("onChange")();
    }, []);

    return <Textarea {...args} value={value} onChange={onChange} />;
  },
  args: {
    value: "controlled",
    rows: 3,
    onChange: action("onChange"),
    maxLength: 300,
    fullWidth: false,
    readOnly: false,
  },
};
