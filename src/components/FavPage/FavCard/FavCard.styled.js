import {RiDeleteBinLine} from "react-icons/ri";
import styled from "styled-components";

export const CardWrapper= styled.li`
displey: flex;
width: 100%;
height: 152px;
border-radius: 8px;
background: #FFF;
padding: 9px 14px;
gap: 14px;

@media screen and  (min-width: 768px) {
     height: 288px;
     padding: 24px 28px;
     gap: 40px;
    }
    @media screen and  (min-width: 1280px){
     height: 404px;
     padding: 40px;
     gap: 50px;
    
    }

`
export const ImgWrapper= styled.div`
`
export const Img= styled.img`
width: 124px;
height: 124px;
flex-shrink: 0;
border-radius: 8px;

@media screen and  (min-width: 768px) {
width: 228px;
height: 232px;
}
@media screen and  (min-width: 1280px){
width: 318px;
height: 324px;

}
`
export const InfoWrapper=styled.div`
`
export const TitleBox=styled.div`
`
export const Title=styled.h3`
color: var(--color-text-primary, #3E4462);
font-family: Poppins;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 14px;
letter-spacing: -0.24px;

@media screen and  (min-width: 768px) {
    font-size: 24px;
    line-height: 24px;
}

`
export const DeleteButton=styled.button`
`
export const DescriptionBox=styled.div`
`
export const Description=styled.p`
overflow: hidden;
color: #23262A;
text-overflow: ellipsis;
whitespace: nowrap;
font-family: Poppins;
font-size: 8px;
font-style: normal;
font-weight: 400;
line-height: 10px;
letter-spacing: -0.16px;

@media screen and  (min-width: 768px){
font-size: 14px;
line-height: 18px;
letter-spacing: -0.28px;
}

@media screen and  (min-width: 1280px){
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.36px;
}

`
export const TimeBox= styled.div`
`
export const Time=styled.p`
`
export const FavPageButton= styled.button`
`

export const StyledIcon = styled(RiDeleteBinLine)`
width: 24px;
height: 24px;
flex-shrink: 0;
border-radius: 4px;
background: #EBF3D4;

@media screen and  (min-width: 768px){
width: 38px;
height: 38px;
}

@media screen and  (min-width: 1280px){
width: 44px;
height: 44px;

}
 `