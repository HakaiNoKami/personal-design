import styled from "styled-components";

export const ContainerOptions = styled.label`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1.8rem;
  width: 100%;
  padding: 0.8rem;
  font-size: 1.4rem;
  line-height: 2rem;
  border-radius: 0.4rem;

  &:hover,
  &:focus,
  &:focus-within {
    background-color: var(--blue-dark-800);
    color: var(--white);
    cursor: pointer;

    input[type="checkbox"]:before {
      border-color: var(--white);
    }

    input[type="checkbox"]:checked:before {
      background-color: var(--white);
    }

    input[type="checkbox"]:checked:after {
      border-color: var(--blue-dark-800);
    }
  }

  input[type="checkbox"] {
    width: 0;
    height: 0;
    margin: 0 1.5rem 1.5rem 0;
    position: relative;

    &:focus {
      outline: transparent;
    }
  }

  input[type="checkbox"]:before {
    content: "";
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.3rem;
    height: 1.3rem;
    border: 0.1rem solid var(--neutral-600);
    border-radius: 0.3rem;
  }

  input[type="checkbox"]:checked:after {
    content: "";
    width: 0.3rem;
    height: 0.7rem;
    margin-left: 0.3rem;
    border-color: var(--neutral-600);
    border-style: solid;
    border-width: 0 0.2rem 0.2rem 0;
    position: absolute;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    top: 0.2rem;
    left: 0.2rem;
  }
`;
