import React from 'react';
import { ChatRoomContainer, ChatRoomImg, ChatRoomInfo, LastMsgStyled, MsgTimeStyled, OwnerNameStyled } from './ChatRoom.style';

const MAX_LENGTH_MSG = 75; // in characters

const ChatRoom = (props) => {
    const { order, ownerImg, ownerName, lastMsg, msgTime, selected, selectRoomToView, room } = props;

    const formatLastMsg = (msg) => {
        if(msg.length > MAX_LENGTH_MSG) return msg.slice(0, MAX_LENGTH_MSG).concat('...')
        else return msg;
    }
    
    return (
        <ChatRoomContainer
            order={order}
            className={selected && 'chat-selected'}
            onClick={()=>selectRoomToView(room)}
        >
            <ChatRoomImg src={ownerImg}/>
            <ChatRoomInfo>
                <OwnerNameStyled>{ownerName}</OwnerNameStyled>
                <LastMsgStyled>{formatLastMsg(lastMsg)}</LastMsgStyled>
            </ChatRoomInfo>
            <MsgTimeStyled>{msgTime}</MsgTimeStyled>
        </ChatRoomContainer>
    );
}

export default ChatRoom;