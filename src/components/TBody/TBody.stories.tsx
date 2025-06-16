import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "components/Table";
import { Td } from "components/Td";
import { Th } from "components/Th";
import { THead } from "components/THead";
import { Tr } from "components/Tr";
import TBody from "./TBody";

const meta: Meta<typeof TBody> = {
  title: "Components/TBody",
  component: TBody,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TBody>;

export const Default: Story = {
  render: () => {
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
      </Table>
    );
  },
  args: {},
};
