import React from 'react';
import { ChatRoomContainer, ChatRoomInfo, ChatRoomImg, MsgTimeStyled, OwnerNameStyled, LastMsgStyled} from './ChatRoom.style';

const ChatRoom = (props) => {
    const { ownerImg, ownerName, lastMsg, msgTime, selected } = props;
    return (
        <ChatRoomContainer className={selected && 'chat-selected'}>
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