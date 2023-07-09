import { useState } from "react";
import { PiForkKnifeBold, PiListBold } from "react-icons/pi";
import { CgClose } from "react-icons/cg";

import {
  HeaderContainer,
  Line,
  StyledLink,
  Box,
  MobileBtn,
  Logo,
  Container,
} from "./styled";

export const Header = () => {
  const [nav, setNav] = useState(false);

  return (
    <Container>
      <HeaderContainer>
        <Box>
          <Logo>
            <PiForkKnifeBold width={40} height={40} color="white" />
          </Logo>
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
              <li>
                <StyledLink to="/search">Search</StyledLink>
              </li>
            </Line>
            <MobileBtn onClick={() => setNav(!nav)}>
              {nav ? <CgClose /> : <PiListBold />}
            </MobileBtn>
          </nav>
        </Box>
      </HeaderContainer>
    </Container>
  );
};