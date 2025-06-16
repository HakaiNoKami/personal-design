import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { InfoIcon } from "assets";
import { Select } from "components/Select";
import Option from "./Option";

const meta: Meta<typeof Option> = {
  title: "Components/Option",
  component: Option,
  tags: ["autodocs"],
  argTypes: {
    children: {
      type: "string",
      control: "text",
      description: "Conteúdo da opção",
    },
    value: {
      type: "string",
      control: "text",
      description: "Valor opção",
    },
    icon: {
      description: "Ícone da opção",
    },
    onClick: {
      type: "function",
      description:
        "Método acionado ao clicar na opção (controlado pelo seletor)",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Option>;

export const Default: Story = {
  render: (args) => {
    return (
      <Select fullWidth placeholder="Select options">
        <Option {...args} />
      </Select>
    );
  },
  args: {
    children: "Opção 1",
    value: "1",
    icon: <InfoIcon />,
    onClick: action("onClick"),
  },
};
