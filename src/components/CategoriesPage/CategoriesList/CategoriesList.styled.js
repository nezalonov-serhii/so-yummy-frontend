import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  margin-left: 16px;
  width: 100%;
  overflow-x: auto;
  border-bottom: 1px solid rgba(224, 224, 224, 1);
  margin-bottom: 32px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
  @media (min-width: 1280px) {
    width: 100%;
    margin-bottom: 50px;
    margin-left: 0px;
  }
`;

export const Item = styled.li`
  padding: 10px 0px 32px 29px;

  @media (min-width: 768px) {
    padding: 10px 0px 28px 30px;
  }

  &:not(:first-child) {
    @media (min-width: 768px) {
      margin-left: 25px;
    }

    @media (min-width: 1280px) {
      margin-left: 0;
      padding: 10px 0px 28px 10px;
    }
  }
`;

export const Button = styled.button`
  font-family: Poppins;
  border: none;
  font-weight: 400;
  background-color: inherit;
  color: rgba(224, 224, 224, 1);
  font-size: 14px;
  @media (min-width: 768px) {
    font-size: 18px;
    color: rgba(189, 189, 189, 1);
  }

  @media (min-width: 1280px) {
    font-size: 16px;
  }
`;
