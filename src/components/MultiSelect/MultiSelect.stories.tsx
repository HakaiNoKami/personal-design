import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import type { MultiOptionValue } from "components/MultiOption";
import { MultiOption } from "components/MultiOption";
import { useCallback, useState } from "react";
import MultiSelect from "./MultiSelect";

const meta: Meta<typeof MultiSelect> = {
  title: "Components/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Conteúdo do seletor multiplo",
    },
    placeholder: {
      type: "string",
      control: "text",
      description:
        "Texto de placeholder exibido quando valor do seletor multiplo for vazio",
    },
    selectAllText: {
      type: "string",
      control: "text",
      description:
        "Texto da opção que seleciona ou desseleciona todas as opções",
    },
    noOptionText: {
      type: "string",
      control: "text",
      description: "Texto de aviso que o seletor não tem opções",
    },
    defaultValue: {
      description:
        "Lista de valores iniciais selecionados (caso não queira controlar o seletor multiplo)",
    },
    value: {
      description:
        "Lista de valores selecionados (caso queira controlar o seletor multiplo)",
    },
    showChips: {
      type: "boolean",
      control: "boolean",
      description:
        "Deve mostrar todas as opções selecionadas abaixo do seletor",
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
    onBlur: {
      type: "function",
      description:
        "Método acionado somente quando o seletor fechar para retornar o valor do seletor multiplo",
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

type Story = StoryObj<typeof MultiSelect>;

export const Uncontrolled: Story = {
  render: (args) => {
    return (
      <MultiSelect {...args}>
        <MultiOption value={1}>Option 1</MultiOption>
        <MultiOption value={2}>Option 2</MultiOption>
        <MultiOption value={3}>Option 3</MultiOption>
        <MultiOption value={4}>Option 4</MultiOption>
        <MultiOption value={5}>Option 5</MultiOption>
      </MultiSelect>
    );
  },
  args: {
    placeholder: "Uncontrolled multi select",
    selectAllText: "Select all",
    noOptionText: "No options available",
    defaultValue: [1],
    showChips: true,
    readOnly: false,
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    direction: "down",
    fullWidth: true,
    disabled: false,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);

    const onChange = useCallback((values: MultiOptionValue[]) => {
      setValue(values);
      action("onChange")();
    }, []);

    const onBlur = useCallback((values: MultiOptionValue[]) => {
      setValue(values);
      action("onBlur")();
    }, []);

    return (
      <MultiSelect {...args} value={value} onChange={onChange} onBlur={onBlur}>
        <MultiOption value={1}>Option 1</MultiOption>
        <MultiOption value={2}>Option 2</MultiOption>
        <MultiOption value={3}>Option 3</MultiOption>
        <MultiOption value={4}>Option 4</MultiOption>
        <MultiOption value={5}>Option 5</MultiOption>
      </MultiSelect>
    );
  },
  args: {
    placeholder: "Controlled multi select",
    selectAllText: "Select all",
    noOptionText: "No options available",
    value: [3, 5],
    showChips: true,
    readOnly: false,
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    direction: "down",
    fullWidth: true,
    disabled: false,
  },
};

export const NoOptions: Story = {
  args: {
    children: "",
    placeholder: "No Options multi select",
    selectAllText: "Select all",
    noOptionText: "No options available",
    showChips: true,
    readOnly: false,
    onChange: action("onChange"),
    onBlur: action("onBlur"),
    direction: "down",
    fullWidth: true,
    disabled: false,
  },
};
