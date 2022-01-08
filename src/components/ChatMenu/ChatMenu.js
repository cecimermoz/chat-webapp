import React, { useContext } from 'react';
import ChatMenuHeader from '../ChatMenuHeader';
import ChatRoom from '../ChatRoom';
import { ChatMenuContainer } from './ChatMenu.style';
import CreateNewChatRoomBtn from '../CreateNewChatRoomBtn';
import { ChatRoomsContext } from '../../models/ChatRoomsContext';

const ChatMenu = ({chatRooms}) => {
    const { selectedRoom, setSelectedRoom } = useContext(ChatRoomsContext)
    const createNewChat = () => {
        alert('New chat has been created')
    };
    const selectOtherChatRoom = (roomToSelect) => {
        setSelectedRoom(roomToSelect)
    }
    console.log('selectedRoom', selectedRoom)

    return (
        <ChatMenuContainer>
            <ChatMenuHeader />
            {
                chatRooms.map( (room,i) => {
                    let { NAME, IMAGE, MESSAGES } = room;
                        let isTheSelectedOne = selectedRoom.OWNER_ID === room.OWNER_ID;
                        let lastMsg = MESSAGES[MESSAGES.length - 1];             
                        return <ChatRoom
                            key={`chat-room-num-${i}`}
                            room={room}
                            ownerImg={IMAGE}
                            ownerName={NAME}
                            lastMsg={lastMsg.TEXT}
                            msgTime={lastMsg.TIME}
                            selected={isTheSelectedOne}
                            callback={selectOtherChatRoom}
                        />
                })
            }
            <CreateNewChatRoomBtn 
                btnCallback={createNewChat}
            />
        </ChatMenuContainer>
    );
}

export default ChatMenu;