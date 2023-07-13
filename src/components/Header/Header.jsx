import { useState } from "react";
import { PiForkKnifeBold, PiListBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import { CgClose } from "react-icons/cg";
import  Container from "../Container";

import {
  HeaderContainer,
  Nav,
  Line,
  StyledLink,
  Box,
  MobileBtn,
  Logo,Search
} from "./styled";

export const Header = () => {
  const [nav, setNav] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleTheme = () => {
  //   setIsDarkMode(prevMode => !prevMode);
  // };

  return (
    <Container>
      <HeaderContainer>
        <Box>
          <Logo>
            <PiForkKnifeBold width={40} height={40} color="white" />
          </Logo>
          <Nav>
            <nav>
              <Line nav={nav}>
                <li>
                  <StyledLink to="/categories">Categories</StyledLink>
                </li>
                <li>
                  <StyledLink to="/add">Add Recipe</StyledLink>
                </li>
                <li>
                  <StyledLink to="/recipe">My Recipe</StyledLink>
                </li>
                <li>
                  <StyledLink to="/favorite">Favorite</StyledLink>
                </li>
                <li>
                  <StyledLink to="/shopping-list">Shopping list</StyledLink>
                </li>
                <Search>
                <IoIosSearch  width={20} height={20}/>
                  <StyledLink to="/search"> Search</StyledLink>
                </Search>
              </Line>
              <MobileBtn onClick={() => setNav(!nav)}>
                {nav ? <CgClose /> : <PiListBold />}
              </MobileBtn>
            </nav>
          </Nav>
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
