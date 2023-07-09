// import { SubForm, FormTitle, FormText, InputWrapper, FormInput, EmailIcon, FormBtn } from "./SubscribeForm.Styled"
import {
  SubscribeContainer,
  SubscribeBox,
  SubscribeTitle,
  SubscribeText,
  Form,
  Label,
  InputIcon,
  Icon,
  Input,
  Btn,
} from './SubscribeForm.Styled';

export const SubscribeForm = () => { 
  //  return (<SubForm>
  //         <FormTitle>Subscribe to our Newsletter</FormTitle>
  //         <FormText>
  //           Subscribe up to our newsletter. Be in touch with latest news and
  //           special offers, etc.
  //    </FormText>
    
  //         <InputWrapper>
  //       <FormInput
  //         type="email"
  //         placeholder="Enter your email address"/>
  //       <EmailIcon/>
  //         </InputWrapper>
  //      <FormBtn type="submit">Subscribe</FormBtn>
   
  //       </SubForm>)

  return (
   <SubscribeContainer>
      <SubscribeBox>
        <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
        <SubscribeText>
          Subscribe up to our newsletter. Be in touch with <br></br>latest news
          and special offers, etc.
        </SubscribeText>
      </SubscribeBox>
      <Form >
        <Label htmlFor="email">
          <InputIcon>
            <Icon />
          </InputIcon>

          <Input
            type="email"
            id="email"
            placeholder="Enter your email address"
           
            required
          />
        </Label>

        <Btn type="submit" >
          Subscribe
        </Btn>
      </Form>
    </SubscribeContainer>
)
   
}