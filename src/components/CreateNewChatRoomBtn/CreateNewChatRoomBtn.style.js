import styled from "styled-components";

const CreateNewChatRoomBtnStyled = styled.a`
    text-decoration: none;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-top: none;
    border: 1px solid transparent;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    text-align: center;
    padding: 20px;
    color: #b5b5b5;
    &:hover{
        border-color: rgba(255,255,255,0.8);
    }
    > .icon {
        vertical-align: middle;
    }
    @media (max-width: 600px) {
        .textBtn{
            display: none;
        }
    }
`;

export { CreateNewChatRoomBtnStyled };