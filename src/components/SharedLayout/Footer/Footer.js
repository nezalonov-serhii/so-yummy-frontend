import { Logo } from "../../Footer/Logo/Logo";
import { FooterWrapper, Tablet, MainWrapper } from "./Footer.Styled";
import { Benefits } from "../../Footer/Benefits/Benefits";
import { NavBar } from "../../Footer/NavBar/NavBar";
import { SubscribeForm } from "../../Footer/SubscribeForm/SubscribeForm";
import { FollowUs } from "../../Footer/FollowUs/FollowUs";

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
