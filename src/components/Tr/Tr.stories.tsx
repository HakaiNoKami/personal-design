import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "components/Table";
import { TBody } from "components/TBody";
import { Td } from "components/Td";
import { Th } from "components/Th";
import { THead } from "components/THead";
import Tr from "./Tr";

const meta: Meta<typeof Tr> = {
  title: "Components/Tr",
  component: Tr,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Conteúdo da linha do cabeçalho ou do corpo da tabela",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tr>;

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
          <Tr {...args}>
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
  args: {},
};
