import styled from "styled-components";

const StyledIngridientsContainer = styled.div`
    max-width: 375px;
    @‌media (max-width: 767px) {
      
        & { min-width: 767px;}

    }
`
const StyledIngridientsHeader = styled.div`
    display:flex;
    justify-content: space-between;
    background-color: #8BAA36;
    color:#FAFAFA;
    padding:10px;
    border-radius:8px;
    & div{
        display:flex;
        justify-content: space-between;
    }
`
const StyledIngrsHeadThumb = styled.div`
    display:flex;
    justify-content: space-between;
`


const StyledIngridientsItem = styled.li`
    display: flex;
    justify-content: space-between;
    height: 84px;
    border-bottom: 1px solid #E0E0E0;
`



export  {
    StyledIngridientsHeader,
    StyledIngridientsItem,
    StyledIngrsHeadThumb,
    StyledIngridientsContainer,
};