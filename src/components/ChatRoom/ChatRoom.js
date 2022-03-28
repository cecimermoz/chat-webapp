import React from 'react';
import { ChatRoomContainer, ChatRoomImg, ChatRoomInfo, LastMsgStyled, MsgTimeStyled, OwnerNameStyled } from './ChatRoom.style';

const ChatRoom = (props) => {
    const { order, ownerImg, ownerName, lastMsg, msgTime, selected, selectRoomToView, selectedRoom, room } = props;

    return (
        <ChatRoomContainer
            order={order}
            className={selected && 'chat-selected'}
            onClick={()=>selectRoomToView(room)}
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