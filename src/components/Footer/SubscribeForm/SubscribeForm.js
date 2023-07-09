import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
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
   const [email, setEmail] = useState("");
    const [isDisabled, setIsDisabled] = useState(true);
    useEffect(() => {
        if (email.trim() !== "") {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [email]);
  
  const handleSubmit = (event) => {
  event.preventDefault();
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (emailRegex.test(email)) {
      toast.success("Email was successfully submitted!");
    }
      else {
    toast.error("Please enter a valid email!");
    }
    setEmail('');
};
  const handleInput = (event) => {
    setEmail(event.target.value);
  };
  return (
   <SubscribeContainer>
      <SubscribeBox>
        <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
        <SubscribeText>
          Subscribe up to our newsletter. Be in touch with <br></br>latest news
          and special offers, etc.
        </SubscribeText>
      </SubscribeBox>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="email">
          <InputIcon>
            <Icon />
          </InputIcon>

          <Input
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={email}
            onChange={handleInput}
            required
          />
        </Label>

        <Btn type="submit" disabled={isDisabled} >
          Subscribe
        </Btn>
      </Form>
    </SubscribeContainer>
)
   
}