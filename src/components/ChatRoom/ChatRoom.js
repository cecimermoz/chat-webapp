import React from 'react';
import { ChatRoomContainer, ChatRoomImg, ChatRoomInfo, LastMsgStyled, MsgTimeStyled, OwnerNameStyled } from './ChatRoom.style';

const ChatRoom = (props) => {
    const { ownerImg, ownerName, lastMsg, msgTime, selected, selectRoomToView, room } = props;

    return (
        <ChatRoomContainer
            className={selected && 'chat-selected'}
            onClick={()=>{
                selectRoomToView(room)}
            }
        >
            <ChatRoomImg src={ownerImg}/>
            <ChatRoomInfo>
                <OwnerNameStyled>{ownerName}</OwnerNameStyled>
                <LastMsgStyled>{lastMsg}</LastMsgStyled>
            </ChatRoomInfo>
            <MsgTimeStyled>{msgTime}</MsgTimeStyled>
        </ChatRoomContainer>
    );
}

export default ChatRoom;