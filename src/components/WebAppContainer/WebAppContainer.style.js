import styled from "styled-components";

const Container = styled.div`
    height: 90vh;
    max-height: 1000px;
    width: 55vw;
    margin: auto;
    display: flex;
    @media (max-width: 1280px) {
        width: 75vw;
    }
    @media (max-width: 1050px){
        width: 90vw;
    }
`;

export { Container };