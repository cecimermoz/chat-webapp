import React, { useContext } from 'react';
import ChatMenuHeader from '../../components/ChatMenuHeader';
import ChatRoom from '../../components/ChatRoom';
import CreateNewChatRoomBtn from '../../components/CreateNewChatRoomBtn';
import { ChatRoomsContext } from '../../models/ChatRoomsContext';
import { ChatMenuContainer, ChatRoomsContainer } from './ChatMenu.style';

const ChatMenu = () => {
    const { rooms, selectedRoom, selectRoomToView, createNewRoom } = useContext(ChatRoomsContext)

    return (
        <ChatMenuContainer>
            <ChatMenuHeader />
            <ChatRoomsContainer>
                {
                    rooms?.map( (room,i) => {
                        const { NAME, IMAGE, MESSAGES } = room;
                        const isNewRoom = (MESSAGES.length <= 0);
                        const isTheSelectedOne = selectedRoom.OWNER_ID === room.OWNER_ID;
                        const lastMsg = !isNewRoom && MESSAGES[MESSAGES.length - 1];             
                        return <ChatRoom
                            order={room.ORDER}
                            key={`chat-room-num-${i}`}
                            room={room}
                            ownerImg={IMAGE}
                            ownerName={NAME}
                            lastMsg={isNewRoom ? '' : lastMsg.TEXT}
                            msgTime={isNewRoom ? '' : lastMsg.TIME}
                            selected={isTheSelectedOne}
                            selectRoomToView={selectRoomToView}

                            selectedRoom={selectedRoom}
                        />
                    })
                }
            </ChatRoomsContainer>
            <CreateNewChatRoomBtn btnCallback={createNewRoom} />
        </ChatMenuContainer>
    );
}

export default ChatMenu;