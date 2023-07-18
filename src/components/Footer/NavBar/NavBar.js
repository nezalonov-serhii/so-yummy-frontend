import { useDispatch } from "react-redux";

import { setSearch } from "../../../redux/Slice/searchSelectSlice/searchSelectSlice";

import { Nav, Styledlink, ItemNav } from "./NavBar.Styled";

export const NavBar = () => {
   const dispatch = useDispatch();
   const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
   };

   return (
      <Nav>
         <ul>
            <ItemNav>
               <Styledlink
                  to="/search"
                  state="ingredient"
                  onClick={() => {
                     scrollToTop();
                     dispatch(setSearch("Ingredients"));
                  }}
               >
                  Ingredients
               </Styledlink>
            </ItemNav>
            <ItemNav>
               <Styledlink to="/add" onClick={scrollToTop}>
                  Add recipe
               </Styledlink>
            </ItemNav>
            <ItemNav>
               <Styledlink to="/my" onClick={scrollToTop}>
                  My recipes
               </Styledlink>
            </ItemNav>
            <ItemNav>
               <Styledlink to="/favorite" onClick={scrollToTop}>
                  Favorite
               </Styledlink>
            </ItemNav>
            <ItemNav>
               <Styledlink to="/shopping-list" onClick={scrollToTop}>
                  Shopping list
               </Styledlink>
            </ItemNav>
         </ul>
      </Nav>
   );
};
