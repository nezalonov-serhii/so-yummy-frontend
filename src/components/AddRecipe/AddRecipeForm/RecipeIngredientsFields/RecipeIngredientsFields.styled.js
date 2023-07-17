import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

export const Container = styled.div`
  margin-bottom: 44px;
  position: relative;
  @media screen and (min-width: 768px) {
    margin-top: 104px;
  }
`;

export const WrapperCounter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  align-items: center;
`;

export const Counter = styled.div`
  display: flex;
  gap: 14px;
  padding: 4px 14px;
  border-radius: 18px;
  border: 1px solid rgba(51, 51, 51, 0.3);
  @media screen and (min-width: 768px) {
    padding: 4px 15px;
  }
`;
export const CounterButton = styled.button`
  background-color: inherit;
  border: none;
  padding: 0;
  color: rgba(51, 51, 51, 0.3);
`;

export const IconPlus = styled(FaPlus)`
  width: 14px;
  height: 14px;
  color: var(--accent-color);
`;

export const IconMinus = styled(FaMinus)`
  width: 14px;
  height: 14px;
  color: "#333333";
`;

export const List = styled.ul``;

export const Li = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 18px;
  border-radius: 7px;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
    letter-spacing: -0.36px;
  }
`;

export const SelectWrapper = styled.div`
  margin-right: 14px;
  flex: 1;
  ${({ hasError }) =>
    hasError &&
    `
    border: solid 1px red;
  `}
`;
export const InputAmount = styled.input`
  position: relative;
  background-color: rgba(245, 245, 245, 1);
  border-radius: 7px;
  padding: 16px;
  width: 84px;
  border: none;
  ${({ hasError }) =>
    hasError &&
    `
    border: solid 1px red;
  `}
`;

export const DelButton = styled.button`
  width: 18px;
  height: 18px;
  background-color: inherit;
  border: none;
  padding: 0;
  margin-left: 33px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-left: 157px;
    width: 20px;
    height: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 60px;
    width: 20px;
    height: 20px;
  }
`;
export const IconDelete = styled(VscChromeClose)`
  width: 18px;
  height: 18px;
  color: #333333;
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
