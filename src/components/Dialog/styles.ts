import { ModalFooter } from "components/ModalFooter";
import { ModalHeader } from "components/ModalHeader";
import { ModalMain } from "components/ModalMain";
import styled from "styled-components";

export const DialogModalHeader = styled(ModalHeader)`
  border: initial;
  width: 40rem;
  align-items: flex-start;

  > button {
    height: 3rem;
  }
`;

export const DialogModalMain = styled(ModalMain)`
  p {
    text-align: justify;
  }
`;

export const DialogModalFooter = styled(ModalFooter)`
  background-color: var(--white);
`;
