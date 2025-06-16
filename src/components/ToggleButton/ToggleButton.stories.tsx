import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { InfoIcon } from "assets";
import { ToggleGroup } from "components/ToggleGroup";
import ToggleButton from "./ToggleButton";

const meta: Meta<typeof ToggleButton> = {
  title: "Components/ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],
  argTypes: {
    children: { description: "Conteúdo do botão toggle" },
    value: {
      type: "number",
      control: "number",
      description: "Valor do botão toggle",
    },
    icon: { description: "Ícone do botão toggle" },
    title: {
      type: "string",
      control: "text",
      description: "Título do botão toggle",
    },
    onClick: {
      type: "function",
      description:
        "Método acionado ao clicar no botão toggle (controlado pelo agrupador de botões toggle)",
    },
    disabled: {
      type: "boolean",
      control: "boolean",
      description: "Desabilita o botão toggle",
    },
    active: {
      type: "boolean",
      control: "boolean",
      description:
        "Indica se o botão toggle está ativo (controlado pelo agrupador de botões toggle)",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleButton>;

export const Default: Story = {
  render: (args) => {
    return (
      <ToggleGroup>
        <ToggleButton {...args} />
      </ToggleGroup>
    );
  },
  args: {
    children: <p>Default content</p>,
    value: 0,
    icon: <InfoIcon />,
    title: "Default content title",
    onClick: action("onClick"),
    disabled: false,
    active: false,
  },
};
