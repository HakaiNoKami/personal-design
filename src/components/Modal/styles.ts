import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10vh;
  z-index: 15;
`;

export const ModalContent = styled.div`
  width: 40rem;
  background-color: var(--white);
  border-radius: 0.4rem;
  animation: modal-fade-in 0.5s;

  &:has(footer) main {
    max-height: calc(80vh - 14.6rem);
  }

  @keyframes modal-fade-in {
    from {
      transform: translateY(-1rem);
    }

    to {
      transform: translateY(0);
    }
  }
`;
