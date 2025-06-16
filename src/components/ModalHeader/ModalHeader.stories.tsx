import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";
import { InfoIcon } from "assets";
import { Button } from "components/Button";
import { Grid } from "components/Grid";
import { Modal } from "components/Modal";
import { ModalMain } from "components/ModalMain";
import { useCallback, useState } from "react";
import ModalHeader from "./ModalHeader";

const meta: Meta<typeof ModalHeader> = {
  title: "Components/ModalHeader",
  component: ModalHeader,
  tags: ["autodocs"],
  argTypes: {
    children: { description: "Conteúdo do header do modal" },
    title: {
      type: "string",
      control: "text",
      description: "Título do header do modal caso não tenha o children",
    },
    onClose: {
      type: "function",
      description: "Método acionado ao clicar no botão '✖'",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ModalHeader>;

export const Default: Story = {
  render: (args) => {
    const [show, setShow] = useState(false);

    const onToggleModal = useCallback(() => setShow(!show), [show]);

    const onClose = useCallback(() => {
      setShow(false);
      action("onClose")();
    }, []);

    return (
      <>
        <Button onClick={onToggleModal}>Open modal</Button>
        <Modal show={show}>
          <ModalHeader {...args} onClose={onClose} />
          <ModalMain noOverflow>
            <p>Modal main content</p>
          </ModalMain>
        </Modal>
      </>
    );
  },
  args: {
    children: (
      <Grid container spacing={1.6} alignItems="center">
        <Grid item>
          <InfoIcon />
        </Grid>
        <Grid item xs>
          <h3>Modal header content</h3>
        </Grid>
      </Grid>
    ),
    onClose: action("onClose"),
  },
};

export const Title: Story = {
  render: (args) => {
    const [show, setShow] = useState(false);

    const onToggleModal = useCallback(() => setShow(!show), [show]);

    const onClose = useCallback(() => {
      setShow(false);
      action("onClose")();
    }, []);

    return (
      <>
        <Button onClick={onToggleModal}>Open modal</Button>
        <Modal show={show}>
          <ModalHeader {...args} onClose={onClose} />
          <ModalMain noOverflow>
            <p>Modal main content</p>
          </ModalMain>
        </Modal>
      </>
    );
  },
  args: {
    title: "Modal header content",
    onClose: action("onClose"),
  },
};
