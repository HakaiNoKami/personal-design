import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "components/Table";
import { TBody } from "components/TBody";
import { Th } from "components/Th";
import { THead } from "components/THead";
import { Tr } from "components/Tr";
import Td from "./Td";

const meta: Meta<typeof Td> = {
  title: "Components/Td",
  component: Td,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Conteúdo da coluna no corpo da tabela",
    },
    width: {
      type: "string",
      control: "text",
      description: "Tamanho da coluna no corpo da tabela (padrão: auto)",
    },
    hasDivisor: {
      type: "boolean",
      control: "boolean",
      description: "Deve adicionar uma linha divisória a esquerda da coluna",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Td>;

export const Default: Story = {
  render: (args) => {
    return (
      <Table fullWidth>
        <THead>
          <Tr>
            <Th>Code</Th>
            <Th>First</Th>
            <Th>Last</Th>
            <Th>Age</Th>
          </Tr>
        </THead>
        <TBody>
          <Tr>
            <Td {...args}>1</Td>
            <Td {...args}>Duane</Td>
            <Td {...args}>Galindo</Td>
            <Td {...args}>21</Td>
          </Tr>
          <Tr>
            <Td {...args}>2</Td>
            <Td {...args}>Barry</Td>
            <Td {...args}>Powley</Td>
            <Td {...args}>24</Td>
          </Tr>
          <Tr>
            <Td {...args}>3</Td>
            <Td {...args}>Charles</Td>
            <Td {...args}>Harris</Td>
            <Td {...args}>27</Td>
          </Tr>
        </TBody>
      </Table>
    );
  },
  args: {
    width: "",
    hasDivisor: false,
  },
};
