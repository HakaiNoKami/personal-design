import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "components/Button";
import { Modal } from "components/Modal";
import { ModalHeader } from "components/ModalHeader";
import { useCallback, useState } from "react";
import ModalMain from "./ModalMain";

const meta: Meta<typeof ModalMain> = {
  title: "Components/ModalMain",
  component: ModalMain,
  tags: ["autodocs"],
  argTypes: {
    noOverflow: {
      type: "boolean",
      control: "boolean",
      description:
        "Deve desabilitar a opção de scroll lateral no conteúdo do modal",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ModalMain>;

export const Default: Story = {
  render: (args) => {
    const [show, setShow] = useState(false);

    const onToggleModal = useCallback(() => setShow(!show), [show]);

    return (
      <>
        <Button onClick={onToggleModal}>Open modal</Button>
        <Modal show={show}>
          <ModalHeader onClose={onToggleModal} title="Modal header content" />
          <ModalMain {...args}>
            <p>Modal main content 1</p> <br /> <br />
            <p>Modal main content 2</p> <br /> <br />
            <p>Modal main content 3</p> <br /> <br />
            <p>Modal main content 4</p> <br /> <br />
            <p>Modal main content 5</p> <br /> <br />
            <p>Modal main content 6</p> <br /> <br />
            <p>Modal main content 7</p> <br /> <br />
            <p>Modal main content 8</p> <br /> <br />
          </ModalMain>
        </Modal>
      </>
    );
  },
  args: {
    noOverflow: false,
  },
};
