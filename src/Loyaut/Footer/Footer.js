import { Logo } from "../../components/Footer/Logo/Logo";
import { FooterWrapper, MainWrapper, Container } from "./Footer.Styled";
import { Benefits } from "../../components/Footer/Benefits/Benefits";
import { NavBar } from "../../components/Footer/NavBar/NavBar"; 
import { SubscribeForm } from "../../components/Footer/SubscribeForm/SubscribeForm";
import { FollowUs } from "../../components/Footer/FollowUs/FollowUs";




export const Footer = () => {
    return ( 
      <FooterWrapper>
        <Container>
        <MainWrapper>
        <div>
          <Logo/>
          <Benefits />
        </div>
       <NavBar/>
          <SubscribeForm />
          </MainWrapper>
        
        </Container>
        <FollowUs/>
      </FooterWrapper>
  );
  
 
 }

