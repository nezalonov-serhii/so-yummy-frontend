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

import { loginThunk } from "../../../redux/thunk/auth/authThunk";
import { selectIsLoadingAuth } from "../../../redux/selector/selectors";
import Loader from "../../../components/Loader/Loader";

const RegisterPage = () => {
   const dispatch = useDispatch();
   const isLoading = useSelector(selectIsLoadingAuth);
   const handleSubmit = (values, actions) => {
      const user = {
         email: values.email,
         password: values.password,
      };

      dispatch(loginThunk(user));
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
                  initialValues={{ email: "", password: "" }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
               >
                  {({ errors, touched }) => (
                     <AuthForm>
                        <AuthTitle>Sign In</AuthTitle>
                        <WrapFields>
                           <WrapField>
                              <AuthField
                                 type="email"
                                 name="email"
                                 placeholder="Email"
                                 invalid={errors.email && touched.email}
                                 valid={touched.email && !errors.email}
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
                                 valid={touched.password && !errors.password}
                              />
                              {errors.password && touched.password && (
                                 <ErrorMessageStyled>
                                    {errors.password}
                                 </ErrorMessageStyled>
                              )}
                           </WrapField>
                        </WrapFields>
                        <Button type="submit">Sign In</Button>
                     </AuthForm>
                  )}
               </Formik>
               <AuthLink to="/register">Registration</AuthLink>
            </Container>
         )}
      </AuthSection>
   );
};

export default RegisterPage;
