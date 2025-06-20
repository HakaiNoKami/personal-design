import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "components/Table";
import { TBody } from "components/TBody";
import { Td } from "components/Td";
import { Th } from "components/Th";
import { THead } from "components/THead";
import { Tr } from "components/Tr";
import TFooter from "./TFooter";

const meta: Meta<typeof TFooter> = {
  title: "Components/TFooter",
  component: TFooter,
  tags: ["autodocs"],
  argTypes: {
    count: {
      type: "number",
      control: "number",
      description:
        "Valor total de quantas linhas/tuplas estão sendo exibidas na tabela",
    },
    recoil: {
      type: "number",
      control: "number",
      description:
        "Valor de recuo do rodapé quando estiver escolando pela tabela (padrão: 0rem)",
    },
  },
};

export default meta;

type Story = StoryObj<typeof TFooter>;

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
        <TFooter {...args} />
      </Table>
    );
  },
  args: {
    count: 3,
    recoil: 0,
  },
};
