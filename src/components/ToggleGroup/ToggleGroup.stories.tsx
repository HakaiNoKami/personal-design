import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { ToggleButton } from "components/ToggleButton";
import { useCallback, useState } from "react";
import type { ToggleGroupValue } from "./ToggleGroup";
import ToggleGroup from "./ToggleGroup";

const meta: Meta<typeof ToggleGroup> = {
  title: "Components/ToggleGroup",
  component: ToggleGroup,
  tags: ["autodocs"],
  argTypes: {
    children: { description: "Lista de botões toggle do agroupador" },
    defaultValue: {
      description:
        "Valor inicial do agrupador de botões toggle (caso não queira controlar o agrupador)",
    },
    value: {
      description:
        "Valor do agrupador de botões toggle (caso queira controlar o agrupador)",
    },
    onChange: {
      type: "function",
      description:
        "Método acionado ao clicar em um botão toggle dentro do agrupador",
    },
    spacing: {
      type: "number",
      control: "number",
      description: "Espaçamento entre os botões toggle (padrão: 0.8rem)",
    },
    exclusive: {
      type: "boolean",
      control: "boolean",
      description:
        "O agrupador deve permitir apenas um botão toggle selecionado",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleGroup>;

export const Uncontrolled: Story = {
  render: (args) => {
    return (
      <ToggleGroup {...args}>
        <ToggleButton value={1}>Toggle 1</ToggleButton>
        <ToggleButton value={2}>Toggle 2</ToggleButton>
        <ToggleButton value={3}>Toggle 3</ToggleButton>
      </ToggleGroup>
    );
  },
  args: {
    defaultValue: [2],
    onChange: action("onChange"),
    spacing: 0.8,
    exclusive: false,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);

    const onChange = useCallback((value: ToggleGroupValue) => {
      setValue(value);
      action("onChange")();
    }, []);

    return (
      <ToggleGroup {...args} value={value} onChange={onChange}>
        <ToggleButton value={1}>Toggle 1</ToggleButton>
        <ToggleButton value={2}>Toggle 2</ToggleButton>
        <ToggleButton value={3}>Toggle 3</ToggleButton>
      </ToggleGroup>
    );
  },
  args: {
    value: [2],
    onChange: action("onChange"),
    spacing: 0.8,
    exclusive: false,
  },
};

export const Exclusive: Story = {
  render: (args) => {
    return (
      <ToggleGroup {...args}>
        <ToggleButton value={1}>Toggle 1</ToggleButton>
        <ToggleButton value={2}>Toggle 2</ToggleButton>
        <ToggleButton value={3}>Toggle 3</ToggleButton>
      </ToggleGroup>
    );
  },
  args: {
    defaultValue: 2,
    onChange: action("onChange"),
    spacing: 0.8,
    exclusive: true,
  },
};
