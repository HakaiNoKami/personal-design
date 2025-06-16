import type { ButtonVariant } from "components/Button";
import { Button } from "components/Button";
import { Modal } from "components/Modal";
import { useCommonText } from "providers/CommonText";
import {
  DialogModalFooter,
  DialogModalHeader,
  DialogModalMain,
} from "./styles";

export interface DialogProps {
  show: boolean;
  title: string;
  description: string;
  cancelText?: string;
  confirmText?: string;
  confirmColor?: ButtonVariant;
  onCancel: () => void;
  onConfirm: () => void;
}

export const Dialog = ({
  show,
  title,
  description,
  confirmColor = "danger",
  cancelText,
  confirmText,
  onCancel,
  onConfirm,
}: DialogProps) => {
  const { dialog } = useCommonText();

  return (
    <Modal show={show}>
      <DialogModalHeader title={title} onClose={onCancel} />
      <DialogModalMain>
        <p>{description}</p>
      </DialogModalMain>
      <DialogModalFooter>
        <Button outlined onClick={onCancel}>
          {cancelText ?? dialog?.cancel ?? ""}
        </Button>
        <Button variant={confirmColor} onClick={onConfirm}>
          {confirmText ?? dialog?.confirm ?? ""}
        </Button>
      </DialogModalFooter>
    </Modal>
  );
};

export default Dialog;
