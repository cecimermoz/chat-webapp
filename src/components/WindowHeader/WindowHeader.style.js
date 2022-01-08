import styled from "styled-components";

const WindowHeaderStyled = styled.div`
    background-color: white;
    width: 100%;
    max-height: 20vh;
    padding: 20px 30px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
`;
const ImgHeader = styled.span`
    > img {
        width: 70px;
        border-radius: 100%;
        margin-right: 20px;
    }
`;
const TextHeader = styled.div`
    > p{
        margin: 0;
        color: #191a1e;
        font-size: 14px;
    }
    > p:first-child{
        font-size: 22px;
        margin-bottom: 3px;
        font-weight: 600;
    }
`;

export { WindowHeaderStyled, ImgHeader, TextHeader };