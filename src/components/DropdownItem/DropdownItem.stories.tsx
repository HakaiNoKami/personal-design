import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { RemoveIcon } from "assets";
import { Dropdown } from "components/Dropdown";
import { DropdownItem } from "./DropdownItem";

const meta: Meta<typeof DropdownItem> = {
  title: "Components/DropdownItem",
  component: DropdownItem,
  tags: ["autodocs"],
  argTypes: {
    children: { description: "Conteúdo do dropdown item" },
    icon: { description: "Ícone do dropdown item" },
    onClick: {
      type: "function",
      description: "Método acionado ao clicar no dropdown item",
    },
  },
};

export default meta;

type Story = StoryObj<typeof DropdownItem>;

export const Default: Story = {
  render: (args) => {
    return (
      <Dropdown text="Defaul dropdown item">
        <DropdownItem {...args}></DropdownItem>
      </Dropdown>
    );
  },
  args: {
    children: <p>Default dropdown item</p>,
    onClick: action("onClick"),
  },
};

export const Icon: Story = {
  render: (args) => {
    return (
      <Dropdown text="Icon dropdown item">
        <DropdownItem {...args}></DropdownItem>
      </Dropdown>
    );
  },
  args: {
    children: <p>Default dropdown item</p>,
    icon: <RemoveIcon />,
    onClick: action("onClick"),
  },
};
