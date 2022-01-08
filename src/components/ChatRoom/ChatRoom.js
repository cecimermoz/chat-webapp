import React from 'react';
import { ChatRoomContainer, ChatRoomInfo, ChatRoomImg, MsgTimeStyled, OwnerNameStyled, LastMsgStyled} from './ChatRoom.style';

const ChatRoom = (props) => {
    const { ownerImg, ownerName, lastMsg, msgTime, selected, callback, room } = props;

    return (
        <ChatRoomContainer
            className={selected && 'chat-selected'}
            onClick={()=>callback(room)}
        >
            <ChatRoomImg src={ownerImg}/>
            <ChatRoomInfo>
                <OwnerNameStyled>{ownerName}</OwnerNameStyled>
                <LastMsgStyled>{lastMsg}</LastMsgStyled>
            </ChatRoomInfo>
            <MsgTimeStyled>{`${msgTime} AM`}</MsgTimeStyled>
        </ChatRoomContainer>
    );
}

export default ChatRoom;