import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "components/Button";
import { Modal } from "components/Modal";
import { ModalHeader } from "components/ModalHeader";
import { ModalMain } from "components/ModalMain";
import { useCallback, useState } from "react";
import ModalFooter from "./ModalFooter";

const meta: Meta<typeof ModalFooter> = {
  title: "Components/ModalFooter",
  component: ModalFooter,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ModalFooter>;

export const Default: Story = {
  render: () => {
    const [show, setShow] = useState(false);

    const onToggleModal = useCallback(() => setShow(!show), [show]);

    return (
      <>
        <Button onClick={onToggleModal}>Open modal</Button>
        <Modal show={show}>
          <ModalHeader onClose={onToggleModal} title="Modal header content" />
          <ModalMain>
            <p>Modal main content</p>
          </ModalMain>
          <ModalFooter>
            <Button outlined onClick={onToggleModal}>
              Cancel
            </Button>
            <Button onClick={onToggleModal}>Confirm</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
  args: {},
};
