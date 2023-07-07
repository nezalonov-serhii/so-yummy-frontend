import styled from "styled-components";

const StyledIngridientsContainer = styled.div`
    width: 100%;
`
const StyledIngridientsHeader = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    height: 58px;
    padding:10px;
    margin-bottom:32px;
    border-radius:8px;
    color:#FAFAFA;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    background-color: #8BAA36;
    & div{
        display:flex;
        justify-content: space-between;
    }
`
const StyledIngrsHeadThumb = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    min-width: 124px;
`
const StyledImageCardThumb = styled.div`
    color:#3E4462;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 12px;
    display:flex;
    justify-content: space-between;
`
const StyledImage = styled.img`
    background-color:#EBF3D4;
    border-radius:8px;
    margin-right: 16px;
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
`
const StyledFlexQuantity = styled.div`
    display:flex;
    justify-content: space-between;
    min-width:97px;
`


const StyledIngridientsItem = styled.li`
    display: flex;
    justify-content: space-between;
    height: 84px;
    margin-bottom:24px;
    border-bottom: 1px solid #E0E0E0;
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
};