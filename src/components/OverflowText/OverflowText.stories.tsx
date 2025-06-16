import type { Meta, StoryObj } from "@storybook/react";
import OverflowText from "./OverflowText";

const meta: Meta<typeof OverflowText> = {
  title: "Components/OverflowText",
  component: OverflowText,
  tags: ["autodocs"],
  argTypes: {
    children: {
      type: "string",
      control: "text",
      description: "Conteúdo do overflow text",
    },
    lines: {
      type: "number",
      control: "number",
      description: "Número de linhas do texto (padrão: 1)",
    },
    breaked: {
      type: "boolean",
      control: "boolean",
      description: "Deve quebrar palavras ao ocultar o excesso de texto",
    },
  },
};

export default meta;

type Story = StoryObj<typeof OverflowText>;

export const Default: Story = {
  args: {
    children:
      "Praesent ultrices elementum accumsan. Nulla mollis lorem nec massa tempor faucibus non in ligula. Aenean nec risus nec dui accumsan scelerisque. Nulla vel nisl ac neque aliquet congue sit amet ut dui. Nullam convallis tellus eget ultricies iaculis. Morbi dolor metus, bibendum eu blandit vel, molestie a massa.",
    lines: 1,
    breaked: false,
  },
};

export const SeveralLines: Story = {
  args: {
    children:
      "Donec facilisis fermentum sem, id aliquet magna interdum ac. Fusce luctus, dui nec pretium sagittis, erat arcu tristique tortor, in ultrices elit neque sagittis massa. Vestibulum non mauris porttitor ante sollicitudin egestas sed quis justo. Curabitur enim orci, bibendum ac nulla et, consectetur viverra mi. Donec elementum dictum turpis vel egestas. Vivamus ultrices, magna ultrices imperdiet rutrum, metus leo dictum elit, a auctor dolor justo eu metus. Phasellus magna neque, laoreet vitae sodales a, commodo sit amet odio. Etiam vel venenatis neque, at pulvinar odio. Suspendisse a venenatis ante, in sagittis quam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas tincidunt venenatis commodo.",
    lines: 3,
    breaked: true,
  },
};
