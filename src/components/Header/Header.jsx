import { useDispatch, useSelector } from "react-redux";
import Container from "../Container";
import { Logo } from "./Logo/Logo";
import { Navigate } from "./Navigate/Navigate";
import { HeaderContainer, Box, ThemeSwitch, ThemeToggle, WrapThemeSwitcher } from "./styled";
import { selectTheme } from "../../redux/selector/selectors";
import { switcherTheme } from "../../redux/Slice/themeSwitcherSlice/themeSwitcherSlice";
import { useScreenWidth } from "../../hooks";

export const Header = () => {
   const theme = useSelector(selectTheme);
   const dispatch = useDispatch();

   const screenWidth = useScreenWidth();

   return (
      <HeaderContainer>
         <Container>
            <Box>
               <Logo />
               <WrapThemeSwitcher>
                  <Navigate />
                  {screenWidth.desktop && (
                     <ThemeSwitch
                        darkThem={theme}
                        onClick={() => {
                           dispatch(switcherTheme());
                        }}
                     >
                        <ThemeToggle darkThem={theme} />
                     </ThemeSwitch>
                  )}
               </WrapThemeSwitcher>
            </Box>
         </Container>
      </HeaderContainer>
   );
};
