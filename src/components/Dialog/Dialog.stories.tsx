import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "components/Button";
import { useCallback, useState } from "react";
import { Dialog } from "./Dialog";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  argTypes: {
    show: {
      type: "boolean",
      control: "boolean",
      description: "Dialog deve aparecer",
    },
    title: {
      type: "string",
      control: "text",
      description: "Título do dialog",
    },
    description: {
      type: "string",
      control: "text",
      description: "Descrição do dialog",
    },
    confirmColor: {
      control: "select",
      options: ["default", "success", "danger", "link"],
      description: "Variante de cores do botão de confirmação",
    },
    onCancel: {
      type: "function",
      description: "Ação acionada ao clicar no botão de cancelamento",
    },
    onConfirm: {
      type: "function",
      description: "Ação acionada ao clicar no botão de confirmação",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: (args) => {
    const [show, setShow] = useState(args.show);

    const onToggleDialog = useCallback(() => setShow(!show), [show]);

    const onCancel = useCallback(() => {
      onToggleDialog();
      action("onCancel")();
    }, [onToggleDialog]);

    const onConfirm = useCallback(() => {
      onToggleDialog();
      action("onConfirm")();
    }, [onToggleDialog]);

    return (
      <>
        <Button onClick={onToggleDialog}>Open Dialog</Button>
        <Dialog
          {...args}
          show={show}
          onCancel={onCancel}
          onConfirm={onConfirm}
        />
      </>
    );
  },
  args: {
    show: false,
    title: "Title dialog",
    description: "Description dialog",
    confirmColor: "danger",
  },
};
