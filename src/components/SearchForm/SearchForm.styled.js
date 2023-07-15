import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

export const SearchFormBox = styled(Form)`
width: 295px;
height: 52px;
display: flex;
align-items: center;
position: relative;
@media (min-width: 768px) {
  width: 362px;
  height: 59px;
}
@media (min-width: 1280px) {
  width: 510px;
  height: 70px;
}
`;

export const SearchFormInput = styled(Field)`
  font-family: Poppins;
  height: 52px;
  padding-left: 32px;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0em;
  text-align: left;
  color: var(--text-primary);
  background-color: var(--background-secondary);
  transition: border 0.3s ease;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 24px 44px;
  box-shadow: 0px 4px 97px 0px #22252a08;
  outline: none;
  :hover {
    border: 1px solid #23262a33;
  }
  :focus {
    border: 1px solid #23262a33;
  }
  @media (min-width: 768px) {
    padding-left: 38px;
    font-size: 14px;
    height: 59px;
  }
  @media (min-width: 1280px) {
    height: 70px;
    padding-left: 48px;
    font-size: 16px;
  }
`;


export const ErrorText = styled(ErrorMessage)`
  position: absolute;
  left: 40px;
  bottom: -25px;
  color: #e74a3b;
  width: 157px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0em;
`;

export const SearchFormContainer = styled.div`

`;