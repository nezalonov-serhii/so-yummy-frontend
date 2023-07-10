import styled from "styled-components";

const StyledListContainerIngridient = styled.ul`
    padding: 0 ;
    @media (min-width: 1280px) {
        padding: 0 40px;
    };
`

const StyledIngridientsContainer = styled.div`
    width: 100%;
`
const StyledIngridientsHeader = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:10px;
    margin-bottom:32px;
    border-radius:8px;

    color:#FAFAFA;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 1.5;
    background-color: #8BAA36;

    & div{
        display:flex;
        justify-content: space-between;
    }
    @media (min-width: 768px) {
        font-size: 18px;
        line-height: 1.4;
        margin-bottom: 50px;
        padding:20px;
    };
    @media (min-width: 1280px) {
        min-width: 1280px;
        max-width: 1240px;
        padding:21px 40px;
        line-height: normal;
        letter-spacing: 0.54px;
    };
`
const StyledIngrsHeadThumb = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    min-width: 124px;
    @media (min-width: 768px) {
        min-width: 231px;
    };
`
const StyledImageCardThumb = styled.div`
    color:#3E4462;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.2;
    display:flex;
    justify-content: space-between;
    @media (min-width: 768px) {
        font-size: 16px;
        line-height: 1.5;
    };
    @media (min-width: 1280px) {
        line-height: 1.5;
    };

`
const StyledImage = styled.img`
    height:60px;
    background-color:#EBF3D4;
    border-radius:8px;
    margin-right: 16px;
    @media (min-width: 768px) {
        height:81px;
    };
`

const StyledQuantity = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    min-width:37px;
    height:23px;
    color:#FAFAFA;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    background-color: #8BAA36;
    border-radius:8px;

    @media (min-width: 768px) {
        min-width:68px;
        height:35px;
        font-size: 18px;
    };
`
const StyledFlexQuantity = styled.div`
    display:flex;
    justify-content: space-between;
    min-width:97px;
    @media (min-width: 768px) {
        min-width:198px;
    };
    @media (min-width: 1280px) {
        min-width:262px;
    };
    
`


const StyledIngridientsItem = styled.li`
    display: flex;
    justify-content: space-between;
    height: 84px;
    padding-right:19px;
    margin-bottom:24px;
    border-bottom: 1px solid #E0E0E0;
    @media (min-width: 768px) {
        padding-right:45px;
        margin-bottom:44px;
        height: 140px;
    };
    @media (min-width: 1280px) {
        padding-right:28px;
    };
`



export  {
    StyledIngridientsHeader,
    StyledIngridientsItem,
    StyledIngrsHeadThumb,
    StyledIngridientsContainer,
    StyledImageCardThumb,
    StyledImage,
    StyledQuantity,
    StyledFlexQuantity,
    StyledListContainerIngridient,
};