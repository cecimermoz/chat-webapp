import styled from "styled-components";

const WindowHeaderStyled = styled.div`
    background-color: white;
    width: 100%;
    max-height: 20vh;
    padding: 20px 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    @media (max-width: 600px) {
        padding: 10px 15px;
    }
`;
const ImgHeader = styled.span`
    > img {
        width: 70px;
        border-radius: 100%;
        margin-right: 20px;
        @media (max-width: 600px) {
            width: 50px;
        }
    }
`;
const TextHeader = styled.div`
    > p {
        margin: 0;
        color: #191a1e;
        font-size: 14px;
        @media (max-width: 600px) {
            font-size: 12px;
        }
    }
    > p:first-child{
        font-size: 22px;
        margin-bottom: 3px;
        font-weight: 600;
        @media (max-width: 600px) {
            font-size: 18px;
        }
    }
    > p:last-child{
        @media (max-width: 400px) {
            display: none;
        }
    }
`;

export { WindowHeaderStyled, ImgHeader, TextHeader };