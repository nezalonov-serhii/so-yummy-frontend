import styled from "styled-components";
import { RxPencil1 } from "react-icons/rx";
import { BiUser } from "react-icons/bi";
import { VscClose } from "react-icons/vsc";
import { FiUser } from "react-icons/fi";

export const Box = styled.div`
  position: fixed;
  width: calc(100% - 32px);
  height: 327px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9;
  padding: 24px;
  background-color: var(--background-recipe-card);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;

  @media (min-width: 480px) {
    width: 330px;
    height: 402px;
    padding: 50px;
  }

  @media (min-width: 768px) {
    width: 480px;
    height: 402px;
    padding: 50px;
  }
  @media (min-width: 1280px) {
    width: 500px;
    height: 425px;
    padding: 50px;
  }
`;
export const Icon = styled(BiUser)`
  width: 16px;
  height: 18px;
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  z-index: 9;
  @media (min-width: 768px) {
    left: 19px;
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
  width: 88px;
  height: 88px;
  border-radius: 50%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 52px;
  background-color: #d9d9d9;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    width: 103px;
    height: 103px;
    margin-bottom: 54px;
  }
`;

export const Label = styled.label`
  width: 100%;
  height: 100%;
`;

export const IconAdd = styled.img`
  position: absolute;
  right: -5px;
  bottom: 0;
  transform: translateX(-50%);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  cursor: pointer;
  background-color: var(--accent-color);
  color: white;
`;

export const InputImage = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border-radius: 50%;
  border: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
`;

export const Image = styled(FiUser)`
  width: 40px;
  height: 40px;
  color: #c4c4c4;
  @media (min-width: 768px) {
    width: 47px;
    height: 47px;
  }
`;
export const NewImage = styled.img`
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  object-fit: cover;
`;

export const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
`;

export const InputWrapper = styled.div`
  position: relative;
  color: var(--text-primary);
`;

export const Input = styled.input`
  width: 100%;
  background-color: var(--background-recipe-card);
  color: inherit;

  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding: 16px 15px;
  padding-left: 40px;
  ${({ hasError }) =>
    hasError &&
    `
    border: solid 1px red;
  `}
`;

export const Button = styled.button`
  width: 100%;
  height: 49px;
  color: white;
  margin-top: 30px;
  background-color: #8baa36;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1280px) {
    font-size: 16px;
    margin-top: 40px;
  }

  &:disabled {
    opacity: 0.4;
  }
`;

export const Pencil = styled(RxPencil1)`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
`;

export const IconClose = styled(VscClose)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 24px;
  right: 24px;
  color: var(--text-primary);
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
  @media (min-width: 1280px) {
    width: 24px;
    height: 24px;
  }
`;
