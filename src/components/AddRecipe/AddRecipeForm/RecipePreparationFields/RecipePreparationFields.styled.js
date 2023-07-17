import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin-bottom: 18px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const Textarea = styled.textarea`
  background-color: rgba(245, 245, 245, 1);
  border: none;
  border-radius: 7px;
  padding: 9px 16px;
  margin-top: 24px;
  min-height: 154px;
  width: 100%;
  ${({ hasError }) =>
    hasError &&
    `
    border: solid 1px red;
      &::placeholder {
    color: red;
  }
    
  `}
  &:active,
  &:focus,
  &:hover {
    outline: solid 2px rgb(241, 196, 15);
  }
`;
