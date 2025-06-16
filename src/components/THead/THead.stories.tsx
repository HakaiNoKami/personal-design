import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "components/Table";
import { TBody } from "components/TBody";
import { Td } from "components/Td";
import { Th } from "components/Th";
import { Tr } from "components/Tr";
import THead from "./THead";

const meta: Meta<typeof THead> = {
  title: "Components/THead",
  component: THead,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Conteúdo do cabeçalho da tabela",
    },
    recoil: {
      type: "number",
      control: "number",
      description:
        "Valor de recuo do cabeçalho quando estiver escolando pela tabela (padrão: 0rem)",
    },
  },
};

export default meta;

type Story = StoryObj<typeof THead>;

export const Default: Story = {
  render: (args) => {
    return (
      <Table fullWidth>
        <THead {...args}>
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
    recoil: 0,
  },
};
