import styled from "styled-components";

const ChatMenuHeaderStyled = styled.div`
    color: #fff;
    flex: 1;
    max-height: 85px;
    font-weight: 600;
    font-size: 22px;
    display: flex;
    align-items: center;
    vertical-align: middle;
    padding: 20px;
    background: linear-gradient(90deg, rgba(192,0,0,1) 0%, rgba(255,0,0,1) 100%);
    &>span{
        @media (max-width: 600px) {
            display: none;
        }
    }
`;
const MenuHeaderImg = styled.img`
    width: 50px;
    margin-right: 10px;
    @media (max-width: 600px) {
        width: 38px;
        margin: 0;
    }
`;

export {ChatMenuHeaderStyled, MenuHeaderImg};