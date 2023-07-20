import styled from "styled-components";

export const Button = styled.button`
  min-width: 160px;
  border-radius: 20px 60px;
  border: 2px solid var(--button-background-primary);
  padding: 6px 14px;
  margin-left: auto;
  margin-right: auto;
  font-size: 10px;
  padding: 12px 24px;
  background-color: transparent;
  text-decoration: none;
  color: var(--background-footer);
  cursor: pointer;
  transition: all 250ms var(--cubic-bezier);

  &:disabled {
    opacity: 0.4;
  }

  &:hover,
  &:focus {
    background-color: var(--button-background-primary);
    color: var(--text-light);
  }

  @media screen and (min-width: 768px) {
    padding: 12px 32px;
    font-size: 14px;
  }
  @media screen and (min-width: 1280px) {
    padding: 14px 38px;
    font-size: 16px;
  }
`;
