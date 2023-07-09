import styled from "styled-components";
import {AiOutlineMail } from "react-icons/ai"

// export const SubForm = styled.form`
// display: block;
//   margin-left: 0;
//   @media (min-width: 768px) {
//     display: flex;
//     justify-content: center;
//     margin-top: 52px;
//   }
//   @media (min-width: 1440px) {
//     display: block;
//     margin-top: 0;
//   }
// `

// export const FormTitle = styled.h3`
// display: none;
// `

// export const FormText = styled.p`
// display: none;
// ` 
// export const EmailIcon = styled(AiOutlineMail)`
// width:16px;
// height:12px;
//  position: absolute;
//  color:#FAFAFA;
//   top: 13px;
//   left: 28%;
//   @‌media (max-width: 767px) {
//     top: 34%;
//     left: 11%;
// }
// `

// export const InputWrapper = styled.div`
// margin-top:32px;
// position: relative;
//   margin-bottom: 8px;
//   display: flex;
//   justify-content: center;

// `

// export const FormInput = styled.input`
// width: 204px;
// height: 38px;
// border-radius: 6px;
// padding: 10px 42px;
// border: 1px solid;
// border-color: #FAFAFA ;
// color: #FAFAFA;
// font-family: Poppins;
// font-size: 10px;
// font-style: normal;
// font-weight: 400;
// line-height: normal;
// letter-spacing: -0.2px;
// background-color: transparent;
//  ::placeholder {
//     color: #FAFAFA;
   


//  }
// `


// export const FormBtn = styled.button`

// width: 204px;
// height: 38px;
// border-radius: 6px;
// background: #8BAA36;
// margin-bottom: 44 px;
// margin-right: auto;
//   margin-left: auto;

//   color: #FAFAFA;
// text-align: center;
// font-family: Poppins;
// font-size: 14px;
// font-style: normal;
// font-weight: 400;
// line-height: 16px;
// `

export const SubscribeContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    margin-left: 235px;
  }
`;

export const SubscribeBox = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

export const SubscribeTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  color: #FAFAFA;
  margin-bottom: 14px;
`;
export const SubscribeText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.28;
  letter-spacing: -0.02em;
  color: var(--text-light);

  margin-bottom: 28px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media screen and (min-width: 1440px) {
    
  display: flex;
  flex-direction: column;
  margin-bottom: 0px;
  }
`;
export const Label = styled.label`
  position: relative;
`;
export const InputIcon = styled.span`
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translateY(-50%);
`;
export const Icon = styled(AiOutlineMail )`
  width: 16px;
  height: 12px;
  color: var( --background-primary);
  
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 16px;
  }
`;
export const Input = styled.input`
  width: 204px;
  height: 38px;
  border: 1px solid var( --background-primary);
  border-radius: 6px;
  outline: rgba(0, 0, 0, 0.2);
  background-color: transparent;
  justify-content: center;
  color: var(--text-light);
  font-size: 10px;
  line-height: 1.5;
  padding-left: 42px;
  
  &::placeholder {
    font-size: 10px;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: var(--text-light);
  }
  
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-right: 12px;
    padding-left: 51px;
    width: 259px;
    height: 50px;
    font-size: 14px;
    line-height: 21px;

    &::placeholder {
      font-size: 14px;
      line-height: 1.5;
      letter-spacing: -0.02em;
    }
  }
  @media screen and (min-width: 1440px) {
    width: 339px;
    height: 60px;
    margin-right: 0;
    font-size: 18px;
    line-height: 1.5;
    &::placeholder {
      font-size: 18px;
      line-height: 1.5;
    }
  }
`;

export const Btn = styled.button`
  width: 204px;
  height: 38px;
  border: none;
  border-radius: 6px;
  outline: rgba(0, 0, 0, 0.2);
  background-color: var(  --button-background-primary);
  color: var(--text-light);
  font-size: 14px;
  line-height: 1.14;
  margin-top: 8px;

   &:hover {
    transition: var(--cubic-bezier);
   opacity: 0.9;
   cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  }
 

  
  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
    margin-top: 0px;
    width: 171px;
    height: 50px;
    font-size: 16px;
    line-height: 1.12;
  }
  @media screen and (min-width: 1440px) {
    margin-top: 16px;
    width: 339px;
    height: 60px;
  }
`;
