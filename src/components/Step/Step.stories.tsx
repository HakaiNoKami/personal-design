import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "components/Stepper";
import Step from "./Step";

const meta: Meta<typeof Step> = {
  title: "Components/Step",
  component: Step,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Conteúdo da etapa/aba",
    },
    title: {
      type: "string",
      control: "text",
      description: "Nome da etapa/aba",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Step>;

export const Default: Story = {
  render: (args) => {
    return (
      <Stepper>
        <Step {...args} />
      </Stepper>
    );
  },
  args: {
    children: <p>Default step content</p>,
    title: "Default title",
  },
};
