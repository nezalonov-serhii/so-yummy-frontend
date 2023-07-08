import { useDispatch, useSelector } from "react-redux";
import { Formik } from "formik";

import {
   Button,
   Container,
   AuthSection,
   AuthForm,
   AuthTitle,
   WrapField,
   AuthField,
   AuthLink,
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
   return (
      <AuthSection>
         {isLoading && <Loader />}
         {!isLoading && (
            <Container>
               <Formik
                  initialValues={{ name: "", email: "", password: "" }}
                  onSubmit={handleSubmit}
               >
                  <AuthForm>
                     <AuthTitle>Registration</AuthTitle>
                     <WrapField>
                        <AuthField type="text" name="name" placeholder="Name" />
                        <AuthField
                           type="email"
                           name="email"
                           placeholder="Email"
                        />
                        <AuthField
                           type="password"
                           name="password"
                           placeholder="Password"
                        />
                     </WrapField>
                     <Button type="submit">Sign up</Button>
                  </AuthForm>
               </Formik>
               <AuthLink to="/signin">Sign In</AuthLink>
            </Container>
         )}
      </AuthSection>
   );
};

export default RegisterPage;
