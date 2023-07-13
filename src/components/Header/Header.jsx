import { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import Container from "../Container";

import {
  HeaderContainer,
  Nav,
  Line,
  StyledLink,
  Box,
  MobileBtn,
  Logo,
  Search,
  LogoIcon,
  SearchText,
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
          <Logo to="/main">
            <LogoIcon width={44} height={44} color="white" />
          </Logo>
          <Nav>
            <nav>
              <Line nav={nav}>
                <li>
                  <StyledLink to="/categories/:categoryName">
                    Categories
                  </StyledLink>
                </li>
                <li>
                  <StyledLink to="/add">Add Recipe</StyledLink>
                </li>
                <li>
                  <StyledLink to="/recipe/:recipeId">My Recipe</StyledLink>
                </li>
                <li>
                  <StyledLink to="/favorite">Favorite</StyledLink>
                </li>
                <li>
                  <StyledLink to="/shopping-list">Shopping list</StyledLink>
                </li>
                <Search>
                  <StyledLink to="/search">
                    <FiSearch width={24} height={24} />
                    <SearchText>Search</SearchText>
                  </StyledLink>
                </Search>
              </Line>
              <MobileBtn size={32} onClick={() => setNav(!nav)}>
                {nav ? <CgClose size={32} /> : <HiOutlineMenuAlt2 size={32}/>}
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
