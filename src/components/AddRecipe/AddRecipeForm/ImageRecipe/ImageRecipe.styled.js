import styled from "styled-components";

export const ImageWrapper = styled.div`
  position: relative;
  width: 279px;
  height: 268px;
  border-radius: 8px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 32px;
  background-color: rgba(139, 170, 54, 1);
  display: flex;
  justify-content: center;
  align-items: center;
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

export const Image = styled.img`
  width: 64px;
  width: 64px;
`;

export const NewImage = styled.img`
  width: 100%;
  height: 100%;
  background-color: white;
  object-fit: cover;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
`;
