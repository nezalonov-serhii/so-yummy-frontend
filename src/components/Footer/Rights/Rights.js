import { RightsBox, RightsText, Span } from "./Rights.Styled";

export const Rights = () => {
   return (
      <RightsBox>
         <RightsText>
            &copy; {new Date().getFullYear()} All Rights Reserved. <Span>Terms of Service</Span>
         </RightsText>
      </RightsBox>
   );
};
