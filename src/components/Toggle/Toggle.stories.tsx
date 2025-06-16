import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { useCallback, useState } from "react";
import Toggle from "./Toggle";

const meta: Meta<typeof Toggle> = {
  title: "Components/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  argTypes: {
    label: { type: "string", control: "text", description: "Rótulo do toggle" },
    value: {
      type: "boolean",
      control: "boolean",
      description: "Valor do toggle (caso queira controlar o toggle)",
    },
    defaultValue: {
      type: "boolean",
      control: "boolean",
      description:
        "Valor inicial do toggle (caso não queira controlar o toggle)",
    },
    onChange: {
      type: "function",
      description: "Método acionado ao clicar no toggle",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Toggle>;

export const Uncontrolled: Story = {
  args: {
    label: "Uncontrolled",
    defaultValue: true,
    onChange: action("onChange"),
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState(args.value);

    const onChange = useCallback((value: boolean) => {
      setValue(value);
      action("onChange")();
    }, []);

    return <Toggle {...args} value={value} onChange={onChange} />;
  },
  args: {
    label: "Controlled",
    value: false,
    onChange: action("onChange"),
  },
};
