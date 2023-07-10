import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    margin: 0 auto;

    @media (min-width: 375px) {
        width: 375px;
    }
    @media (min-width: 768px) {
        padding: 0 32px;
        width: 768px;
    }
    @media (min-width: 1280px) {
        padding: 0 20px;
        width: 1280px;
    }
`;

export default Container;