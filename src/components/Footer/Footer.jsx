import { Logo } from "./Logo/Logo";
import { FooterWrapper, Tablet, MainWrapper, Wrapper, Section } from "./Footer.Styled";

import { Benefits } from "./Benefits/Benefits";
import { NavBar } from "./NavBar/NavBar";
import { SubscribeForm } from "./SubscribeForm/SubscribeForm";
import { FollowUs } from "./FollowUs/FollowUs";
import { CopyRight } from "./CopyRight/CopyRight";

const Footer = () => {
   return (
     <>
       <Section>
         <Wrapper>
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
         </Wrapper>
       </Section>
       <CopyRight />
     </>
   );
};

export default Footer;
