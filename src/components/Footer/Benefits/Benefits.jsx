import { BenefList, BenefItem } from "./Benefits.Styled";

export const Benefits = () => {
   return (
      <BenefList>
         <BenefItem>Database of recipes that can be replenished</BenefItem>
         <BenefItem>Flexible search for desired and unwanted ingredients</BenefItem>
         <BenefItem>Ability to add your own recipes with photos</BenefItem>
         <BenefItem>Convenient and easy to use</BenefItem>
      </BenefList>
   );
};
