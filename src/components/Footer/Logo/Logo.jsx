import {
  LogoWrapper,
  IconWrapper,
  LogoIcon,
  Title,
  LogoLink,
} from "./Logo.Styled";

export const Logo = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <LogoWrapper>
        <LogoLink to="/main" onClick={scrollToTop}>
          <IconWrapper>
            <LogoIcon />
          </IconWrapper>
        </LogoLink>
        <Title>So Yummy</Title>
      </LogoWrapper>
    </>
  );
};
