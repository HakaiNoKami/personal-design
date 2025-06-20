import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { MultiSelect } from "components/MultiSelect";
import MultiOption from "./MultiOption";

const meta: Meta<typeof MultiOption> = {
  title: "Components/MultiOption",
  component: MultiOption,
  tags: ["autodocs"],
  argTypes: {
    children: {
      type: "string",
      control: "text",
      description: "Conteúdo da opção multipla",
    },
    value: {
      type: "string",
      control: "text",
      description: "Valor opção multipla",
    },
    selected: {
      type: "boolean",
      control: "boolean",
      description: "Deve estar selecionada (controlado pelo seletor multiplo)",
    },
    onClick: {
      type: "function",
      description:
        "Método acionado ao clicar na opção multipla (controlado pelo seletor multiplo)",
    },
  },
};

export default meta;

type Story = StoryObj<typeof MultiOption>;

export const Default: Story = {
  render: (args) => {
    return (
      <MultiSelect fullWidth placeholder="Select options">
        <MultiOption {...args} />
      </MultiSelect>
    );
  },
  args: {
    children: "Opção 1",
    value: "1",
    selected: true,
    onClick: action("onClick"),
  },
};
