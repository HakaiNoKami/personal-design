import type { Meta, StoryObj } from "@storybook/react";
import Tooltip from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  argTypes: {
    children: { description: "Conteúdo do tooltip" },
    tip: {
      description: "Conteúdo que irá aparecer ao colocar o mouse no tooltip",
    },
    position: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      description: "Posição que o tip irá aparecer",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  render: (args) => {
    return (
      <div
        style={{
          width: "100%",
          height: "15rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Tooltip {...args} />
      </div>
    );
  },
  args: {
    children: <span>Top tooltip content</span>,
    tip: <span>Top tip</span>,
    position: "top",
  },
};

export const Bottom: Story = {
  render: (args) => {
    return (
      <div
        style={{
          width: "100%",
          height: "15rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Tooltip {...args} />
      </div>
    );
  },
  args: {
    children: <span>Bottom tooltip content</span>,
    tip: <span>Bottom tip</span>,
    position: "bottom",
  },
};

export const Left: Story = {
  render: (args) => {
    return (
      <div
        style={{
          width: "100%",
          height: "15rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Tooltip {...args} />
      </div>
    );
  },
  args: {
    children: <span>Left tooltip content</span>,
    tip: <span>Left tip</span>,
    position: "left",
  },
};

export const Right: Story = {
  render: (args) => {
    return (
      <div
        style={{
          width: "100%",
          height: "15rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Tooltip {...args} />
      </div>
    );
  },
  args: {
    children: <span>Right tooltip content</span>,
    tip: <span>Right tip</span>,
    position: "right",
  },
};
