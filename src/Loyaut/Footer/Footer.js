import { Logo } from "../../components/Footer/Logo/Logo";
import { FooterWrapper, Tablet, MainWrapper } from "./Footer.Styled";
import { Benefits } from "../../components/Footer/Benefits/Benefits";
import { NavBar } from "../../components/Footer/NavBar/NavBar";
import { SubscribeForm } from "../../components/Footer/SubscribeForm/SubscribeForm";
import { FollowUs } from "../../components/Footer/FollowUs/FollowUs";

 const Footer = () => {
  return (
    <FooterWrapper>
      <MainWrapper>
        <Tablet>
          <div>
            <Logo />
            <Benefits />
          </div>
          <NavBar />
        </Tablet>
        <SubscribeForm />
      </MainWrapper>
      <FollowUs />
    </FooterWrapper>
  );
};

export default Footer;
