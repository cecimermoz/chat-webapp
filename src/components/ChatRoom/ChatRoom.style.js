import styled from "styled-components";

const ChatRoomContainer = styled.div`
    color: #fff;
    padding: 15px 10px 15px 15px;
    display: flex;
    align-items: center;
    border-right: 5px solid transparent;
    &.chat-selected{
        border: 1px solid rgba(255,255,255,0.8);
        background: rgba(255,255,255,0.15);
        border-right: 5px solid #ff0000;
    }
`;
const ChatRoomImg = styled.img`
    color: #fff;
    border-radius: 100%;
    width: 60px;
    margin-right: 15px;
`;
const ChatRoomInfo = styled.span`
    color: #fff;
    flex: 1;
`;
const OwnerNameStyled = styled.p`
    font-weight: 600;
    line-height: 0;
    font-size: 14px;
`;
const LastMsgStyled = styled.p`
    font-size: 10px;
    padding-right: 16px;
    line-height: 14px;
`;

const MsgTimeStyled = styled.span`
    font-size: 10px;
    margin-top: 10px;
    align-self: stretch;
`;


export { ChatRoomContainer, ChatRoomInfo, ChatRoomImg, MsgTimeStyled, OwnerNameStyled, LastMsgStyled };