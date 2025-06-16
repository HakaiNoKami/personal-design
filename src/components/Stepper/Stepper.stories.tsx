import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { Step } from "components/Step";
import { useCallback, useState } from "react";
import Stepper from "./Stepper";

const meta: Meta<typeof Stepper> = {
  title: "Components/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  argTypes: {
    children: {
      description: "Lista de etapas/abas",
    },
    step: {
      type: "number",
      control: "number",
      description: "Número da etapa/aba (caso queira controlar a etapa/aba)",
    },
    onChange: {
      type: "function",
      description: "Método acionado ao clicar em uma etapa/aba diferente",
    },
    direction: {
      control: "select",
      options: ["vertical", "horizontal"],
      description: "Direção que as estapas/abas vão ser distribuidas",
    },
    hasScroll: {
      type: "boolean",
      control: "boolean",
      description: "Deve ter scroll nas estapas/abas",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Uncontrolled: Story = {
  render: (args) => {
    return (
      <Stepper {...args}>
        <Step title="Step 1">
          <p>Uncontrolled step 1</p>
        </Step>
        <Step title="Step 2">
          <p>Uncontrolled step 2</p>
        </Step>
        <Step title="Step 3">
          <p>Uncontrolled step 3</p>
        </Step>
      </Stepper>
    );
  },
  args: {
    direction: "vertical",
    hasScroll: false,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [step, setStep] = useState(args.step);

    const onChange = useCallback((value: number) => {
      setStep(value);
      action("onChange")();
    }, []);

    return (
      <Stepper {...args} step={step} onChange={onChange}>
        <Step title="Step 1">
          <p>Uncontrolled step 1</p>
        </Step>
        <Step title="Step 2">
          <p>Uncontrolled step 2</p>
        </Step>
        <Step title="Step 3">
          <p>Uncontrolled step 3</p>
        </Step>
      </Stepper>
    );
  },
  args: {
    step: 1,
    onChange: action("onChange"),
    direction: "vertical",
    hasScroll: false,
  },
};
