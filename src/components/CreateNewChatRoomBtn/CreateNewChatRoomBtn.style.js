import styled from "styled-components";

const CreateNewChatRoomBtnStyled = styled.a`
    text-decoration: none;
    flex: 1.5;
    cursor: pointer;
    border-top: none;
    border: 1px solid transparent;
    font-size: 20px;
    display: block;
    text-align: center;
    padding: 20px;
    color: #b5b5b5;
    &:hover{
        border-color: rgba(255,255,255,0.8);
    }
    > .icon {
        vertical-align: middle;
    }
`;

export { CreateNewChatRoomBtnStyled };