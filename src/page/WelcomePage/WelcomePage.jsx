import {
   ContainerWelcome,
   IconWrapper,
   LinkRegister,
   LinkSignin,
   LogoIcon,
   NavBox,
   Text,
   Title,
} from "./WelcomePage.styled";

const WelcomePage = () => {
   return (
      <>
         <ContainerWelcome>
            <IconWrapper>
               <LogoIcon />
            </IconWrapper>
            <Title>Welcome to the app!</Title>
            <Text>
               This app offers more than just a collection of recipes - it is designed to be your
               very own digital cookbook. You can easily save and retrieve your own recipes at any
               time.
            </Text>
            <NavBox>
               <LinkRegister to="/register">Registration</LinkRegister>
               <LinkSignin to="/signin">Sign in</LinkSignin>
            </NavBox>
         </ContainerWelcome>
      </>
   );
};
export default WelcomePage;
