import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 46px;
  margin-top: 18px;
  margin-bottom: 10px;
`;

export const Box = styled.div`
  display: flex;
  height: 100%;
  margin-left: 200px;
  margin-right: auto;
  flex-direction: column-reverse;
`;

// export const ThemeSwitch = styled.div`
// @media (max-width: 768px) {
//   display: flex;
//   margin-left: 20px;
//   align-items: flex-end;
// flex-direction: column-reverse;
// }
// `;

// export const ThemeToggle = styled.input`
// @media (max-width: 768px) {
//   width: 40px;
//   height: 20px;
//   appearance: none;
//   z-index:999;
//   background-color: #ccc;
//   outline: none;
//   border-radius: 10px;
//   position: relative;
//   cursor: pointer;
//   transition: background-color 0.3s;
//   &:checked {
//     background-color: #8baa36;
//   }
//   &:before {
//     content: "";
//     width: 16px;
//     height: 16px;
//     background-color: #fff;
//     border-radius: 50%;
//     position: absolute;
//     bottom: 2px;
//     left: ${props => (props.checked ? "22px" : "2px")};
//     transition: left 0.3s;
//   }}
// `;
