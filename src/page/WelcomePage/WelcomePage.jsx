import {
   ContainerWelcome,
   NavBox,
   StyledLink,
   Text,
   Title,
} from "./WelcomePage.styled";

const WelcomePage = () => {
   return (
      <>
         <ContainerWelcome>
            <Title>Welcome to the app!</Title>
            <Text>
               This app offers more than just a collection of recipes - it is
               designed to be your very own digital cookbook. You can easily
               save and retrieve your own recipes at any time.
            </Text>
            <NavBox>
               <StyledLink to="/register">Registration</StyledLink>
               <StyledLink to="/signin">Sign in</StyledLink>
            </NavBox>
         </ContainerWelcome>
      </>
   );
};
export default WelcomePage;
