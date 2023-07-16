import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

export const Container = styled.div`
  margin-bottom: 44px;
`;

export const WrapperCounter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Counter = styled.div`
  display: flex;
  gap: 14px;
  padding: 7px 14px;
  border-radius: 18px;
  border: 1px solid rgba(51, 51, 51, 0.3);
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
  margin-bottom: 18px;
`;

export const SelectWrapper = styled.div`
  margin-right: 14px;
  flex: 1;
`;
export const InputAmount = styled.input`
  background-color: rgba(245, 245, 245, 1);
  border-radius: 7px;
  padding: 16px;
  width: 84px;
  border: none;
`;

export const DelButton = styled.button`
  background-color: inherit;
  border: none;
  padding: 0;
  margin-left: 33px;
`;
export const IconDelete = styled(VscChromeClose)`
  width: 18px;
  height: 18px;
  color: #333333;
`;
