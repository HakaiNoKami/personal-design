import type { Meta, StoryObj } from "@storybook/react";
import Time from "./Time";

const meta: Meta<typeof Time> = {
  title: "Components/Time",
  component: Time,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Time>;

export const Default: Story = {
  args: {},
};
