import React, { useContext } from 'react';
import { ChatRoomsContext } from '../../models/ChatRoomsContext';
import ChatMenuHeader from '../ChatMenuHeader';
import ChatRoom from '../ChatRoom';
import CreateNewChatRoomBtn from '../CreateNewChatRoomBtn';
import { ChatMenuContainer, ChatRoomsContainer } from './ChatMenu.style';

const ChatMenu = () => {
    const { rooms, selectedRoom, selectRoomToView, createNewRoom } = useContext(ChatRoomsContext)

    return (
        <ChatMenuContainer>
            <ChatMenuHeader />
            <ChatRoomsContainer>
                {
                    rooms?.map( (room,i) => {
                        let { NAME, IMAGE, MESSAGES } = room;
                            let isNewRoom = (MESSAGES.length <= 0);
                            let isTheSelectedOne = selectedRoom.OWNER_ID === room.OWNER_ID;
                            let lastMsg = !isNewRoom && MESSAGES[MESSAGES.length - 1];             
                            return <ChatRoom
                                key={`chat-room-num-${i}`}
                                room={room}
                                ownerImg={IMAGE}
                                ownerName={NAME}
                                lastMsg={isNewRoom ? '' : lastMsg.TEXT}
                                msgTime={isNewRoom ? '' : lastMsg.TIME}
                                selected={isTheSelectedOne}
                                selectRoomToView={selectRoomToView}
                            />
                    })
                }
            </ChatRoomsContainer>
            <CreateNewChatRoomBtn 
                btnCallback={createNewRoom}
            />
        </ChatMenuContainer>
    );
}

export default ChatMenu;