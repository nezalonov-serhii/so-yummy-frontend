import { Formik } from "formik";
import * as Yup from "yup";

import {
   SubscribeContainer,
   SubscribeBox,
   SubscribeTitle,
   SubscribeText,
   AuthForm,
   Label,
   InputIcon,
   Icon,
   Input,
   Btn,
   ErrorMessageStyled,
   WrapField,
} from "./SubscribeForm.Styled";

export const SubscribeForm = () => {
   const validationSchema = Yup.object({
      email: Yup.string()
         .matches(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Invalid email address"
         )
         .required("Email is required"),
   });
   return (
      <SubscribeContainer>
         <SubscribeBox>
            <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
            <SubscribeText>
               Subscribe up to our newsletter. Be in touch with <br></br>latest news and special
               offers, etc.
            </SubscribeText>
         </SubscribeBox>

         <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => {
               actions.resetForm();
               console.log(values);
            }}
         >
            {({ errors, touched }) => (
               <>
                  <AuthForm>
                     <div>
                        <Label htmlFor="email">
                           <InputIcon>
                              <Icon />
                           </InputIcon>
                           <WrapField>
                              <Input
                                 type="email"
                                 name="email"
                                 placeholder="Email"
                                 autoComplete="username"
                                 invalid={errors.email && touched.email ? "invalid" : ""}
                                 valid={!errors.email && touched.email ? "valid" : ""}
                              />
                           </WrapField>
                        </Label>
                        {errors.email && touched.email && (
                           <ErrorMessageStyled>{errors.email}</ErrorMessageStyled>
                        )}
                     </div>
                     <Btn type="submit">Subscribe</Btn>
                  </AuthForm>
               </>
            )}
         </Formik>
      </SubscribeContainer>
   );
};
