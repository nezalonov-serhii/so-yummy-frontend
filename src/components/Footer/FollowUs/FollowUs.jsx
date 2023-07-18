import { FacebokIcon, YouTubeIcon, TwitterIcon, InstaIcon, FollowList } from "./FollowUs.Styled";

export const FollowUs = () => {
   return (
      <FollowList>
         <li>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
               <FacebokIcon />
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
   );
};
