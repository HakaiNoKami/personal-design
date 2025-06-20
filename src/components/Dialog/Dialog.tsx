import type { ButtonVariant } from "components/Button";
import { Button } from "components/Button";
import { Modal } from "components/Modal";
import { useTranslation } from "react-i18next";
import {
  DialogModalFooter,
  DialogModalHeader,
  DialogModalMain,
} from "./styles";

export interface DialogProps {
  show: boolean;
  title: string;
  description: string;
  confirmColor?: ButtonVariant;
  onCancel: () => void;
  onConfirm: () => void;
}

export const Dialog = ({
  show,
  title,
  description,
  confirmColor = "danger",
  onCancel,
  onConfirm,
}: DialogProps) => {
  const { t } = useTranslation();

  return (
    <Modal show={show}>
      <DialogModalHeader title={title} onClose={onCancel} />
      <DialogModalMain>
        <p>{description}</p>
      </DialogModalMain>
      <DialogModalFooter>
        <Button outlined onClick={onCancel}>
          {t("cancel")}
        </Button>
        <Button variant={confirmColor} onClick={onConfirm}>
          {t("confirm")}
        </Button>
      </DialogModalFooter>
    </Modal>
  );
};

export default Dialog;
