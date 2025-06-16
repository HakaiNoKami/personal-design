import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import type { OptionValue } from "components/Option";
import { Option } from "components/Option";
import { useCallback, useState } from "react";
import Select from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Conteúdo do seletor",
    },
    placeholder: {
      type: "string",
      control: "text",
      description:
        "Texto de placeholder exibido quando valor do seletor for vazio",
    },
    noOptionText: {
      type: "string",
      control: "text",
      description: "Texto de aviso que o seletor não tem opções",
    },
    defaultValue: {
      description:
        "Valor inicial selecionado (caso não queira controlar o seletor)",
    },
    value: {
      description: "Valor selecionado (caso queira controlar o seletor)",
    },
    hasClear: {
      type: "boolean",
      control: "boolean",
      description: "Deve ter a opção de limpar o campo ao clicar no '✖'",
    },
    readOnly: {
      type: "boolean",
      control: "boolean",
      description: "Deve permitir apenas leitura do campo",
    },
    onChange: {
      type: "function",
      description:
        "Método acionado sempre que uma opção for marcada ou desmarcada para retornar o valor do seletor multiplo",
    },
    direction: {
      control: "select",
      options: ["up", "down"],
      description: "Direção que o seletor irá abrir",
    },
    fullWidth: {
      type: "boolean",
      control: "boolean",
      description: "Deve oculpar o tamanho máximo da caixa",
    },
    disabled: {
      type: "boolean",
      control: "boolean",
      description: "Desabilitar o seletor multiplo",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Uncontrolled: Story = {
  render: (args) => {
    return (
      <Select {...args}>
        <Option value={1}>Option 1</Option>
        <Option value={2}>Option 2</Option>
        <Option value={3}>Option 3</Option>
      </Select>
    );
  },
  args: {
    placeholder: "Uncontrolled select",
    noOptionText: "No options available",
    defaultValue: 1,
    hasClear: true,
    readOnly: false,
    onChange: action("onChange"),
    direction: "down",
    fullWidth: true,
    disabled: false,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);

    const onChange = useCallback((value: OptionValue) => {
      setValue(value);
      action("onChange")();
    }, []);

    return (
      <Select {...args} value={value} onChange={onChange}>
        <Option value={1}>Option 1</Option>
        <Option value={2}>Option 2</Option>
        <Option value={3}>Option 3</Option>
      </Select>
    );
  },
  args: {
    placeholder: "Controlled select",
    noOptionText: "No options available",
    value: 3,
    hasClear: true,
    readOnly: false,
    onChange: action("onChange"),
    direction: "down",
    fullWidth: true,
    disabled: false,
  },
};

export const NoOptions: Story = {
  args: {
    children: "",
    placeholder: "No Options select",
    noOptionText: "No options available",
    hasClear: true,
    readOnly: false,
    onChange: action("onChange"),
    direction: "down",
    fullWidth: true,
    disabled: false,
  },
};
