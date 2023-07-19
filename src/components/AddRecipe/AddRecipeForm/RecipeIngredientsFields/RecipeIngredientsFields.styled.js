import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { VscChromeClose } from "react-icons/vsc";

export const Container = styled.div`
  margin-top: 44px;
  position: relative;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-top: 104px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 104px;
    padding-right: 191px;
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
  border: 1px solid var(--text-primary);
  @media screen and (min-width: 768px) {
    padding: 4px 15px;
  }
  overflow: hidden;
  & p {
    color: var(--text-third);
  }
`;
export const CounterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
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
  color: var(--text-primary);
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
  background-color: var(--background-input-secondary);
  border-radius: 7px;
  padding: 16px;
  width: 84px;
  border: 1px solid var(--border-input);
  color: var(--text-primary);
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
  color: var(--text-primary);
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;

export const customStyles = {
  control: (baseStyles, state) => ({
    // width: 198,
    backgroundColor: "var( --background-input-secondary)",
    border: "1px solid var(--border-input)",

    padding: 6,
    borderRadius: 7,
    cursor: "pointer",
    display: "flex",
  }),
  menu: (provided, state) => ({
    ...provided,
    borderRadius: "6px",
    backgroundColor: "var(--background-input)",
  }),
  menuList: (provided, state) => ({
    ...provided,
    "::-webkit-scrollbar": {
      width: "6px",
    },
    "::-webkit-scrollbar-track": {
      margin: "4px 0",
    },
    borderRadius: "12px",
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "var(--scroll-color)",
      borderRadius: "12px",
    },
    margin: "0 4px",
    padding: "8px 14px",
    maxHeight: "144px",
    backgroundColor: "var(--background-input)",
    "@media screen and (min-width: 768px) and (max-width: 1279px)": {
      maxHeight: "162px",
    },
    borderRadius: "6px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    color: "var(--text-primary)",
    fontSize: "12px",
    fontWeight: 400,
    lineHeight: "normal",
    letterSpacing: "-0.24px",
    margin: "4px 0",
    padding: "0px",
    cursor: "pointer",
    "@media screen and (min-width: 768px) and (max-width: 1279px)": {
      fontSize: "14px",
      letterSpacing: "-0.28px",
    },
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: "var(--accent-color)",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "var(--text-primary)",
  }),
};
