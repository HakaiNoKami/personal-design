import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "components/Button";
import { ModalHeader } from "components/ModalHeader";
import { ModalMain } from "components/ModalMain";
import { useCallback, useState } from "react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    children: { description: "Conteúdo do modal" },
    show: {
      type: "boolean",
      control: "boolean",
      description: "Modal deve aparecer",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: (args) => {
    const [show, setShow] = useState(args.show);

    const onToggleModal = useCallback(() => setShow(!show), [show]);

    return (
      <>
        <Button onClick={onToggleModal}>Open modal</Button>
        <Modal show={show}>
          <ModalHeader onClose={onToggleModal} title="Modal header content" />
          <ModalMain noOverflow>
            <p>Modal main content</p>
          </ModalMain>
        </Modal>
      </>
    );
  },
  args: {
    show: false,
  },
};
