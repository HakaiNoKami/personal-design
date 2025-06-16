import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "components/Box";
import { Iframe } from "./Iframe";

const meta: Meta<typeof Iframe> = {
  title: "Components/Iframe",
  component: Iframe,
  tags: ["autodocs"],
  argTypes: {
    children: { description: "Conteúdo do iframe" },
  },
};

export default meta;

type Story = StoryObj<typeof Iframe>;

export const Default: Story = {
  args: {
    children: (
      <Box>
        <p>Iframe content</p>
      </Box>
    ),
  },
};
