import type { Meta, StoryObj } from "@storybook/react";
import { InfoIcon } from "assets";
import { DropdownItem } from "components/DropdownItem";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
  argTypes: {
    children: { description: "Lista de itens do dropdown" },
    text: { description: "Texto do dropdown" },
    icon: { description: "Ícone do dropdown" },
    loading: {
      type: "boolean",
      control: "boolean",
      description: "Loading do dropdown",
    },
    hideArrow: {
      type: "boolean",
      control: "boolean",
      description: "Deve ocultar o seta",
    },
    fullWidth: {
      type: "boolean",
      control: "boolean",
      description: "Deve ocupar o tamanho máximo da caixa",
    },
    outlined: {
      type: "boolean",
      control: "boolean",
      description: "Deve ter o estilo mais transparente",
    },
    bordered: {
      type: "boolean",
      control: "boolean",
      description: "Deve ter o estilo com bordas",
    },
    disabled: {
      type: "boolean",
      control: "boolean",
      description: "Deve estar desabilitado",
    },
    centralized: {
      type: "boolean",
      control: "boolean",
      description: "O texto deve estar centralizado",
    },
    positionIcon: {
      control: "select",
      options: ["start", "end"],
      description: "O ícone deve estar no início ou no fim do dropdown",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    children: (
      <>
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem>Item 2</DropdownItem>
        <DropdownItem>Item 3</DropdownItem>
      </>
    ),
    text: <p>Default dropdown</p>,
    loading: false,
    hideArrow: false,
    fullWidth: false,
    outlined: false,
    bordered: false,
    disabled: false,
    centralized: false,
    positionIcon: "start",
  },
};

export const Icon: Story = {
  args: {
    children: (
      <>
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem>Item 2</DropdownItem>
        <DropdownItem>Item 3</DropdownItem>
      </>
    ),
    text: <p>Icon dropdown</p>,
    icon: <InfoIcon />,
    loading: false,
    hideArrow: false,
    fullWidth: false,
    outlined: false,
    bordered: false,
    disabled: false,
    centralized: false,
    positionIcon: "start",
  },
};

export const NoArrow: Story = {
  args: {
    children: (
      <>
        <DropdownItem>Item 1</DropdownItem>
        <DropdownItem>Item 2</DropdownItem>
        <DropdownItem>Item 3</DropdownItem>
      </>
    ),
    text: <p>No arrow dropdown</p>,
    icon: <InfoIcon />,
    loading: false,
    hideArrow: true,
    fullWidth: false,
    outlined: false,
    bordered: false,
    disabled: false,
    centralized: false,
    positionIcon: "end",
  },
};
