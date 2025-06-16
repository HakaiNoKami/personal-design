import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "components/Table";
import { TBody } from "components/TBody";
import { Td } from "components/Td";
import { THead } from "components/THead";
import { Tr } from "components/Tr";
import Th from "./Th";

const meta: Meta<typeof Th> = {
  title: "Components/Th",
  component: Th,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Conteúdo da coluna no cabeçalho da tabela",
    },
    width: {
      type: "string",
      control: "text",
      description:
        "Tamanho da coluna no cabeçalho da tabela quando o layout da tabela for fixo (padrão: auto)",
    },
    onClick: {
      type: "function",
      description:
        "Método acionado ao clicar na coluna do cabeçalho (adiciona o marcardor de ordenação '⇵')",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Th>;

export const Default: Story = {
  render: (args) => {
    return (
      <Table fullWidth>
        <THead>
          <Tr>
            <Th {...args}>Code</Th>
            <Th {...args}>First</Th>
            <Th {...args}>Last</Th>
            <Th {...args}>Age</Th>
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
    width: "",
    onClick: action("onClick"),
  },
};
