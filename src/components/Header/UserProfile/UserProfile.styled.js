import styled from "styled-components";
import { RxAvatar, RxPencil1 } from "react-icons/rx";

export const Box = styled.div`
@media (min-width: 1280px) {
  position: absolute;
  width: 500px;
  height: 425px;
  right: 370px;
  top: 0;
  z-index: 9;
  padding: 50px;
  background-color: white;
  border-radius: 10px;
}
`;

export const Avatar = styled(RxAvatar)`
@media (min-width: 1280px) {
  display: flex;
  width: 103px;
  height: 103px;
  color: #c4c4c4;
  background-color: #d9d9d9;
  border-radius: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
}
`;

export const Form = styled.form`
  margin-left: auto;
  margin-right: auto;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
@media (min-width: 1280px) {
  position: relative;
  width: 405px;
  height: 58px;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  margin-top: 50px;
  padding: 0 15px;
}
`;

export const Button = styled.button`
@media (min-width: 1280px) {
  width: 400px;
  height: 59px;
  color: white;
  margin-top: 30px;
  background-color: #8baa36;
  border: none;
  border-radius: 6px;
}
`;

export const Pencil = styled(RxPencil1)`
@media (min-width: 1280px) {
  position: absolute;
  top: 80px;
  right: 15px;
  transform: translateY(-50%);
  color: #23262A;
}
`;