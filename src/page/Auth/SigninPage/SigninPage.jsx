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
                     <AuthTitle>Sign In</AuthTitle>
                     <WrapField>
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
                     <Button type="submit">Sign In</Button>
                  </AuthForm>
               </Formik>
               <AuthLink to="/register">Registration</AuthLink>
            </Container>
         )}
      </AuthSection>
   );
};

export default RegisterPage;
