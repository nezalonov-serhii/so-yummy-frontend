import styled from "styled-components";
const SearchFormbox = styled.form`
  width: 295px;
  margin: 0 auto;

  display: flex;
  align-items: center;

  position: relative;
  margin-top: 50px;

  @media (min-width: 768px) {
    width: 362px;
    margin-top: 40px;
  }
  @media (min-width: 1024px) {
    width: 510px;
    margin-top: 50px;
  }
`;

const SearchFormInput = styled.input`
  font-family: Poppins;
  height: 53px;
  padding-left: 32px;

  font-size: 12px;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0em;

  text-align: left;
  color: #3e4462;

  background-color: #ffffff;

  width: 100%;

  border: 1px solid #f0f0f0;
  border-radius: 24px 44px;
  box-shadow: 0px 4px 97px 0px #22252a08;

  outline: none;
  :hover {
    border: 1px solid #23262a33;
  }
  :focus {
    border: 1px solid #23262a33;
  }

  @media (min-width: 768px) {
    height: 57px;
    padding-left: 38px;
    font-size: 14px;
  }

  @media (min-width: 1024px) {
    height: 70px;
    padding-left: 48px;
    font-size: 16px;
  }
`;

const SearchFormButton = styled.button`
  position: absolute;
  right: 0;

  padding: 16px 31.72px;

  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;

  background-color: #8baa36;

  border: 1px solid transparent;
  border-radius: 24px 44px;

  text-align: center;
  color: #fafafa;
  :hover {
    background-color: #22252a;
  }
  :focus {
    background-color: #22252a;
  }
  @media (min-width: 768px) {
    font-size: 16px;
    padding: 16px 52px;
  }

  @media (min-width: 1024px) {
    padding: 23px 52px;
  }
`;

export { SearchFormbox, SearchFormInput, SearchFormButton };
