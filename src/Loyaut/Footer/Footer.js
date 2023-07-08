import { Logo } from "../../components/Footer/Logo/Logo";
import { FooterWrapper, MainWrapper } from "./Footer.Styled";
import { Benefits } from "../../components/Footer/Benefits/Benefits";
import { NavBar } from "../../components/Footer/NavBar/NavBar"; 
import { SubscribeForm } from "../../components/Footer/SubscribeForm/SubscribeForm";
import { FollowUs } from "../../components/Footer/FollowUs/FollowUs";

const windowInnerWidth = window.innerWidth;

console.log(windowInnerWidth)

export const Footer = () => {
    return ( 
      <FooterWrapper>
        <MainWrapper>
        <div>
          <Logo/>
          <Benefits />
        </div>
       <NavBar/>
          <SubscribeForm />
          </MainWrapper>
        <FollowUs/>
       
      </FooterWrapper>
    );
 }


