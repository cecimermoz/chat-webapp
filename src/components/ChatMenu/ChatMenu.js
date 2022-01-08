import React from 'react';
import ChatMenuHeader from '../ChatMenuHeader';
import ChatRoom from '../ChatRoom';
import { ChatMenuContainer } from './ChatMenu.style';
import CreateNewChatRoomBtn from '../CreateNewChatRoomBtn';

const ChatMenu = ({chatRooms}) => {
    const createNewChat = () => {
        alert('New chat has been created')
    };

    return (
        <ChatMenuContainer>
            <ChatMenuHeader />
            {
                chatRooms.map( (room,i) => {
                    let { NAME, IMAGE, MESSAGES } = room;
                        let lastMsg = MESSAGES[MESSAGES.length - 1];             
                        return <ChatRoom
                            key={`chat-room-num-${i}`}
                            ownerImg={IMAGE}
                            ownerName={NAME}
                            lastMsg={lastMsg.TEXT}
                            msgTime={lastMsg.TIME}
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