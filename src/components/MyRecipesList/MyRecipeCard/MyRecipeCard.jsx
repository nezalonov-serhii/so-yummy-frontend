import { Link } from "react-router-dom";

import Food from "../../../images/RecipePage/svg/food.svg";

import {
   CardWrapper,
   ImgWrapper,
   Img,
   InfoWrapper,
   TitleBox,
   Title,
   DeleteButton,
   StyledIcon,
   DescriptionBox,
   Description,
   TimeBox,
   Time,
   FavPageButton,
} from "./MyRecipeCard.styled";

export const MyRecipeCard = (recipe) => {
   const { id, title, preview, description, time, onDelete } = recipe;

   return (
      <>
         <CardWrapper key={id}>
            <ImgWrapper>
               <Img src={preview || Food} alt={title} />
            </ImgWrapper>
            <InfoWrapper>
               <div>
                  <TitleBox>
                     <Title>{title}</Title>
                     <DeleteButton
                        type="button"
                        onClick={() => {
                           onDelete(id);
                        }}
                     >
                        <StyledIcon />
                     </DeleteButton>
                  </TitleBox>
                  <DescriptionBox>
                     <Description>{description}</Description>
                  </DescriptionBox>
               </div>
               <TimeBox>
                  <Time>{time} min</Time>
                  <Link to={`/recipe/${id}`}>
                     <FavPageButton>See reecipe</FavPageButton>
                  </Link>
               </TimeBox>
            </InfoWrapper>
         </CardWrapper>
      </>
   );
};
