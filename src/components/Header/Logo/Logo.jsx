import { LogoBox, LogoIcon } from "./Logo.styled";

export const Logo = () => {
   return (
      <LogoBox to="/main">
         <LogoIcon width={44} height={44} color="white" />
      </LogoBox>
   );
};
