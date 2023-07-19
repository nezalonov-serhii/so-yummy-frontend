import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { Form, Field } from "formik";

export const SubscribeContainer = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    min-width: fit-content;
    flex-direction: column;
    align-items: baseline;
    margin-left: 120px;
  }
`;

export const SubscribeBox = styled.div`
  display: none;
  @media screen and (min-width: 1280px) {
    display: block;
  }
`;

export const SubscribeTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: #fafafa;
  margin-bottom: 14px;
`;
export const SubscribeText = styled.p`
  font-family: Poppins;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.28px;
  color: var(--text-light);
  margin-bottom: 28px;
`;

export const AuthForm = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    margin-right: auto;
    margin-left: auto;
    margin-top: 72px;
    justify-content: center;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 0px;
    margin-top: 0px;
  }
`;
export const Label = styled.label`
  position: relative;
`;
export const InputIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
`;
export const Icon = styled(AiOutlineMail)`
  width: 16px;
  height: 12px;
  color: var(--border-input-footer);
  ${(props) => {
    if (props.invalid === "invalid") return "color: #E74A3B;";
    else return "";
  }}

  ${(props) => {
    if (props.valid === "valid") return "color: #3CBC81;";
    else return "";
  }}

   @media screen and (min-width: 768px) {
    width: 20px;
    height: 16px;
  }
`;
export const Input = styled(Field)`
  width: 204px;
  height: 38px;
  border: 1px solid var(--border-input-footer);
  border-radius: 6px;
  outline: rgba(0, 0, 0, 0.2);
  background-color: transparent;
  justify-content: center;
  color: var(--text-light);
  font-size: 10px;
  line-height: 1.5;
  padding-left: 42px;
  ${(props) => {
    if (props.invalid === "invalid") return "border-color: #E74A3B;";
    else return "";
  }}

  ${(props) => {
    if (props.valid === "valid") return "border-color: #3CBC81;";
    else return "";
  }}

  
  &::placeholder {
    font-size: 10px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: var(--text-light);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: 12px;
    padding-left: 51px;
    width: 259px;
    height: 50px;
    font-size: 14px;
    line-height: 21px;

    &::placeholder {
      font-size: 14px;
      line-height: 1.5;
      letter-spacing: -0.02em;
    }
  }
  @media screen and (min-width: 1280px) {
    width: 339px;
    height: 60px;
    margin-right: 0;
    font-size: 18px;
    line-height: 1.5;
    &::placeholder {
      font-size: 18px;
      line-height: 1.5;
    }
  }
`;

export const Btn = styled.button`
  width: 204px;
  height: 38px;
  border: 1px solid var(--button-background-other);
  border-radius: 6px;
  outline: rgba(0, 0, 0, 0.2);
  background-color: var(--button-background-other);
  color: var(--text-light);
  font-size: 14px;
  line-height: 1.14;
  margin-top: 18px;
  box-shadow: inset 0 0 0 0 var(--background-footer);
  -webkit-transition: ease-out 0.4s;
  -moz-transition: ease-out 0.4s;
  transition: ease-out 0.4s;

  &:hover {
    box-shadow: inset 400px 0 0 0 var(--background-footer);
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-top: 0px;
    width: 171px;
    height: 50px;
    font-size: 16px;
    line-height: 1.12;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 26px;
    width: 339px;
    height: 60px;
  }
`;
export const ErrorMessageStyled = styled.p`
  position: absolute;
  top: 32%;
  transform: translateY(100%);
  color: #e74a3b;
  font-family: Poppins;
  font-size: 10px;
  @media screen and (min-width: 768px) {
    font-size: 12px;
    top: 77%;
  }
  @media screen and (min-width: 1280px) {
    font-size: 14px;
    top: 32%;
  }
`;

export const WrapField = styled.div`
  position: relative;
  top: 0;
  left: 0;
`;
