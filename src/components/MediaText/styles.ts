import styled from "styled-components";

export const MessageFile = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

  p {
    flex: 1;
  }

  svg {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const PreviewImg = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 0.4rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
