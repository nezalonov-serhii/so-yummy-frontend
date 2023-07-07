import {TitleText, Wrapper} from "./TitleText.styled";

export const Title = ({children})=>{
    return <Wrapper>
         <TitleText>{children}</TitleText>
    </Wrapper>
   }

