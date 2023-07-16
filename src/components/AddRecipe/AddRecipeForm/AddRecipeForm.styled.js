import styled from "styled-components";

export const Container = styled.div`
  margin-top: 72px;
  margin-bottom: 72px;
`;
export const Button = styled.button`
  /* background-color: var(--accent-color); */
  color: var(--text-light);
  border-radius: 15px 30px 15px 30px;
  padding: 12px 48px;
  border: none;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: ${(props) =>
    props.isFormValid ? "var(--accent-color)" : "var(--background-footer)"};
  /* &:disabled {
    background-color: var(--background-footer); */
  /* cursor: not-allowed; */
`;
