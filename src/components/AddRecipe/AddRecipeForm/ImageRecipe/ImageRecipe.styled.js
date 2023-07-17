import styled from "styled-components";

export const ImageWrapper = styled.div`
  position: relative;
  width: 279px;
  height: 268px;
  border-radius: 8px;
  margin-right: auto;
  margin-left: auto;
  background-color: var(--button-background-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin: 0;
  }
  @media screen and (min-width: 1280px) {
    width: 357px;
    height: 344px;
    margin: 0;
  }
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
  background-color: #fafafa;
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
