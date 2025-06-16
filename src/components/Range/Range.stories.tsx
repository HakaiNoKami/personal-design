import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import type { ChangeEvent } from "react";
import { useCallback, useState } from "react";
import Range from "./Range";

const meta: Meta<typeof Range> = {
  title: "Components/Range",
  component: Range,
  tags: ["autodocs"],
  argTypes: {
    name: { type: "string", control: "text", description: "Nome do range" },
    value: {
      type: "number",
      control: "number",
      description: "Valor do range (caso queira controlar o range)",
    },
    defaultValue: {
      type: "number",
      control: "number",
      description: "Valor inicial do range (caso não queira controlar o range)",
    },
    min: {
      type: "number",
      control: "number",
      description: "Valor mínimo do range",
    },
    max: {
      type: "number",
      control: "number",
      description: "Valor máximo do range",
    },
    step: {
      type: "number",
      control: "number",
      description: "Valor de salto para cada etapa do range",
    },
    fullWidth: {
      type: "boolean",
      control: "boolean",
      description: "Deve ocupar o tamanho máximo da caixa",
    },
    readOnly: {
      type: "boolean",
      control: "boolean",
      description: "Deve permitir apenas leitura",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Range>;

export const Uncontrolled: Story = {
  args: {
    name: "Uncontrolled range",
    defaultValue: 10,
    min: 5,
    max: 25,
    step: 5,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
      setValue(Number(e.target.value));
      action("onChange")();
    }, []);

    return <Range {...args} value={value} onChange={onChange} />;
  },
  args: {
    name: "Uncontrolled range",
    value: 10,
    min: 5,
    max: 25,
    step: 5,
    onChange: action("onChange"),
  },
};
