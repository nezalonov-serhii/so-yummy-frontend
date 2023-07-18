import { Title } from "../AddRecipe.styled";
import {
   Container,
   FacebookIcon,
   FollowList,
   InstaIcon,
   TwitterIcon,
   YouTubeIcon,
} from "./FollowUsAddRecipe.styled";

export const FollowUsAddRecipe = () => {
   return (
      <Container>
         <Title>FollowUs</Title>

         <FollowList>
            <li>
               <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                  <FacebookIcon />
               </a>
            </li>
            <li>
               <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
                  <YouTubeIcon />
               </a>
            </li>
            <li>
               <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <TwitterIcon />
               </a>
            </li>
            <li>
               <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                  <InstaIcon />
               </a>
            </li>
         </FollowList>
      </Container>
   );
};
