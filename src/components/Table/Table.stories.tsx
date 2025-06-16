import type { Meta, StoryObj } from "@storybook/react";
import { TBody } from "components/TBody";
import { Td } from "components/Td";
import { Th } from "components/Th";
import { THead } from "components/THead";
import { Tr } from "components/Tr";
import Table from "./Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Conteúdo da tabela",
    },
    fullWidth: {
      type: "boolean",
      control: "boolean",
      description: "Deve oculpar o tamanho máximo da caixa",
    },
    spacing: {
      type: "number",
      control: "number",
      description:
        "Espaçamento interno das colunas td/th no cabeçalho e no corpo (padrão: 0.8rem)",
    },
    overflow: {
      type: "boolean",
      control: "boolean",
      description: "Deve ter como utilizar o scroll horizontal na tabela",
    },
    fixed: {
      type: "boolean",
      control: "boolean",
      description: "Deve aplicar o layout de tabela fixo",
    },
    hasFilter: {
      type: "boolean",
      control: "boolean",
      description: "Deve remover as bordas do topo da tabela",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args) => {
    return (
      <Table {...args}>
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
            <Td>1</Td>
            <Td>Duane</Td>
            <Td>Galindo</Td>
            <Td>21</Td>
          </Tr>
          <Tr>
            <Td>2</Td>
            <Td>Barry</Td>
            <Td>Powley</Td>
            <Td>24</Td>
          </Tr>
          <Tr>
            <Td>3</Td>
            <Td>Charles</Td>
            <Td>Harris</Td>
            <Td>27</Td>
          </Tr>
        </TBody>
      </Table>
    );
  },
  args: {
    fullWidth: true,
    spacing: 1.2,
    overflow: false,
    fixed: false,
    hasFilter: false,
  },
};
