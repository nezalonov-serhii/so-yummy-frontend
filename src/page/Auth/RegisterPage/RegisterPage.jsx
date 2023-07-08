import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";
import * as Yup from "yup";
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
} from "../AuthPage.styled";
import { signupThunk } from "../../../redux/thunk/auth/authThunk";
import { selectIsLoadingAuth } from "../../../redux/selector/selectors";
import Loader from "../../../components/Loader/Loader";

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
      actions.resetForm();
   };
   const validationSchema = Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
         .matches(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Invalid email address"
         )
         .required("Email is required"),
      password: Yup.string().required("Password is required"),
   });

   return (
      <AuthSection>
         {isLoading && <Loader />}
         {!isLoading && (
            <Container>
               <Formik
                  initialValues={{ name: "", email: "", password: "" }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
               >
                  {({ errors, touched }) => (
                     <AuthForm>
                        <AuthTitle>Registration</AuthTitle>
                        <WrapFields>
                           <WrapField>
                              <AuthField
                                 type="text"
                                 name="name"
                                 placeholder="Name"
                                 invalid={errors.name && touched.name}
                                 valid={!errors.name && touched.name}
                              />
                              {errors.name && touched.name && (
                                 <ErrorMessageStyled>
                                    {errors.name}
                                 </ErrorMessageStyled>
                              )}
                           </WrapField>
                           <WrapField>
                              <AuthField
                                 type="email"
                                 name="email"
                                 placeholder="Email"
                                 invalid={errors.email && touched.email}
                                 valid={!errors.email && touched.email}
                              />
                              {errors.email && touched.email && (
                                 <ErrorMessageStyled>
                                    {errors.email}
                                 </ErrorMessageStyled>
                              )}
                           </WrapField>
                           <WrapField>
                              <AuthField
                                 type="password"
                                 name="password"
                                 placeholder="Password"
                                 invalid={errors.password && touched.password}
                                 valid={!errors.password && touched.password}
                              />
                              {errors.password && touched.password && (
                                 <ErrorMessageStyled>
                                    {errors.password}
                                 </ErrorMessageStyled>
                              )}
                           </WrapField>
                        </WrapFields>
                        <Button type="submit">Sign up</Button>
                     </AuthForm>
                  )}
               </Formik>
               <AuthLink to="/signin">Sign In</AuthLink>
            </Container>
         )}
      </AuthSection>
   );
};

export default RegisterPage;
