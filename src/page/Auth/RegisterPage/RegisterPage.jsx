import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";

import { signupThunk } from "../../../redux/thunk/auth/authThunk";
import { selectIsLoadingAuth } from "../../../redux/selector/selectors";

import Loader from "../../../components/Loader/Loader";

import {
   Button,
   Container,
   AuthSection,
   AuthForm,
   AuthTitle,
   WrapField,
   AuthField,
   AuthLink,
   ErrorMessageStyled,
   WrapFields,
   NameIcon,
   LockIcon,
   MailIcon,
   ValidCheckIcon,
   InvalidCheckIcon,
} from "../AuthPage.styled";

const RegisterPage = () => {
   const dispatch = useDispatch();
   const isLoading = useSelector(selectIsLoadingAuth);
   const handleSubmit = (values, actions) => {
      const newUser = {
         name: values.name,
         email: values.email,
         password: values.password,
      };

      dispatch(signupThunk(newUser));
      // actions.resetForm();
   };
   const validationSchema = Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
         .matches(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Invalid email address"
         )
         .required("Email is required"),
      password: Yup.string()
         .required("Password is required")
         .min(6, "Password must be at least 6 characters"),
   });

   const checkFieldValid = (errors, touched, fieldName) => {
      switch (true) {
         case errors[fieldName] && touched[fieldName]:
            return "invalid";
         case !errors[fieldName] && touched[fieldName]:
            return "valid";
         default:
            return "";
      }
   };

   return (
      <AuthSection>
         <Container>
            <Formik
               initialValues={{ name: "", email: "", password: "" }}
               validationSchema={validationSchema}
               onSubmit={handleSubmit}
            >
               {({ errors, touched }) => (
                  <div>
                     <AuthForm>
                        <AuthTitle>Registration</AuthTitle>
                        <WrapFields>
                           <WrapField>
                              <NameIcon
                                 invalid={checkFieldValid(errors, touched, "name")}
                                 valid={checkFieldValid(errors, touched, "name")}
                              />
                              <AuthField
                                 type="text"
                                 name="name"
                                 placeholder="Name"
                                 invalid={checkFieldValid(errors, touched, "name")}
                                 valid={checkFieldValid(errors, touched, "name")}
                              />
                              {!errors.name && touched.name && <ValidCheckIcon />}
                              {errors.name && touched.name && <InvalidCheckIcon />}
                              {errors.name && touched.name && (
                                 <ErrorMessageStyled>{errors.name}</ErrorMessageStyled>
                              )}
                           </WrapField>
                           <WrapField>
                              <MailIcon
                                 invalid={checkFieldValid(errors, touched, "email")}
                                 valid={checkFieldValid(errors, touched, "email")}
                              />
                              <AuthField
                                 type="email"
                                 name="email"
                                 placeholder="Email"
                                 autoComplete="username"
                                 invalid={checkFieldValid(errors, touched, "email")}
                                 valid={checkFieldValid(errors, touched, "email")}
                              />
                              {!errors.email && touched.email && <ValidCheckIcon />}
                              {errors.email && touched.email && <InvalidCheckIcon />}
                              {errors.email && touched.email && (
                                 <ErrorMessageStyled>{errors.email}</ErrorMessageStyled>
                              )}
                           </WrapField>
                           <WrapField>
                              <LockIcon
                                 invalid={checkFieldValid(errors, touched, "password")}
                                 valid={checkFieldValid(errors, touched, "password")}
                              />
                              <AuthField
                                 type="password"
                                 name="password"
                                 placeholder="Password"
                                 autoComplete="current-password"
                                 invalid={checkFieldValid(errors, touched, "password")}
                                 valid={checkFieldValid(errors, touched, "password")}
                              />
                              {!errors.password && touched.password && <ValidCheckIcon />}
                              {errors.password && touched.password && <InvalidCheckIcon />}
                              {errors.password && touched.password && (
                                 <ErrorMessageStyled>{errors.password}</ErrorMessageStyled>
                              )}
                           </WrapField>
                        </WrapFields>
                        <Button type="submit" disabled={isLoading}>
                           {isLoading && <Loader size={"20"} color={"var(--text-dark)"} />}
                           {!isLoading && "Sign up"}
                        </Button>
                     </AuthForm>
                     <AuthLink to="/signin">Sign In</AuthLink>
                  </div>
               )}
            </Formik>
         </Container>
      </AuthSection>
   );
};

export default RegisterPage;
