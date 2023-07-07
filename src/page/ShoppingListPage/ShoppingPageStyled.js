import styled from "styled-components";

const ShoppingPageContainer = styled.div`
    margin: 0 auto;
    max-width:375px;
    padding-left:16px;
    padding-right:16px;    
    @media (min-width: 768px) {
        padding-left:32px;
        padding-right:32px;
        min-width: 768px;
    };
    @media (min-width: 1024px) {
        min-width: 1024px;
        max-width: 1304px;
    };
      
`

export {
    ShoppingPageContainer
}