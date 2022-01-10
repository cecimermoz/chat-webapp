import styled from "styled-components";

const ChatRoomContainer = styled.a`
    cursor: pointer;
    padding: 10px 5px 10px 15px;
    display: flex;
    align-items: center;
    border-right: 3px solid transparent;
    color: rgba(255,255,255,0.5);
    min-height: 86px;
    border-bottom: 2px solid rgba(255,255,255,0.4);
    &.chat-selected,
    &:hover{
        background: rgba(255,255,255,0.15);
        border-right: 3px solid #ff0000;
    }
    @media (max-width: 650px) {
        min-height: 65px;
    }
    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: center;
        min-height: auto;
        padding: 10px;
    }
`;
const ChatRoomImg = styled.img`
    color: #fff;
    border-radius: 100%;
    width: 48px;
    margin-right: 8px;
    @media (max-width: 650px) {
        width: 38px;
    }
    @media (max-width: 600px) {
        width: 40px;
        margin: 0;
    }
`;
const ChatRoomInfo = styled.span`
    color: #fff;
    flex: 1;
`;
const OwnerNameStyled = styled.p`
    color: #fff;
    font-weight: 600;
    font-size: 12px;
    margin: 6px 0 0 0;
    @media (max-width: 600px) {
        display: none;
    }
`;
const LastMsgStyled = styled.p`
    font-size: 10px;
    padding-right: 16px;
    line-height: 14px;
    margin-top: 5px;
    color: rgba(255,255,255,0.5);
    @media (max-width: 650px) {
        display: none;
    }
`;

const MsgTimeStyled = styled.span`
    font-size: 8px;
    margin-top: 10px;
    align-self: stretch;
    @media (max-width: 850px) {
        display: none;
    }
`;


export { ChatRoomContainer, ChatRoomInfo, ChatRoomImg, MsgTimeStyled, OwnerNameStyled, LastMsgStyled };