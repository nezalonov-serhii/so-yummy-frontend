import styled from "styled-components";

const SearchSelectorBox = styled.div`
  display: flex;
  width: 223px;
  align-items: center;
  margin: 0 auto;

  margin-top: 24px;

  @media (min-width: 768px) {
    margin-top: 28px;
    width: 265px;
  }

  @media (min-width: 1024px) {
    width: 310px;
  }
`;

const SearchSelectorLabel = styled.label`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: -0.23999999463558197px;
  text-align: left;

  color: #001833;
  @media (min-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
  }
`;

const SearchSelector = styled.select`
  display: inline-block;
  margin-left: 8px;
  width: 198px;
  height: 49px;
  background: #d9d9d9;
  opacity: 15.7%;
  font-family: Poppins;
  padding: 14px;
  /*  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: -0.02em;
  text-align: left;
  
  

  gap: 8px; */
  color: #000000;
  border: 1px solid transparent;
  border-radius: 6px;
  :hover {
    /* background-color: #ffffff; */
    border: 1px solid #23262a33;
  }
  :focus {
    /* background-color: #ffffff; */
    border: 1px solid #23262a33;
  }
`;
// const SearchSelectorOption = styled.select`
//   /* font-size: 14px;
//   font-weight: 400;
//   line-height: 21px;
//   letter-spacing: -0.02em;
//   text-align: left; */
//   color: #000000;

//   /* gap: 8px; */
// `;
// const SelectorBox = styled.select``;

export {
  SearchSelectorLabel,
  SearchSelector,
  // SearchSelectorOption,
  SearchSelectorBox,
  // SelectorBox,
};
