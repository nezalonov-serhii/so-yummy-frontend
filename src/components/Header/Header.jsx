
import Container from "../Container";
import { Logo } from "./Logo/Logo";
import { Navigate } from "./Navigate/Navigate";
import { HeaderContainer, Box } from "./styled";

export const Header = () => {
  
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleTheme = () => {
  //   setIsDarkMode(prevMode => !prevMode);
  // };

  return (
    <Container>
      <HeaderContainer>
        <Box>
          <Logo />
          <Navigate />
          
          {/* <ThemeSwitch>
            <ThemeToggle
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleTheme}
            />
          </ThemeSwitch> */}
          
        </Box>
      </HeaderContainer>
    </Container>
  );
};
