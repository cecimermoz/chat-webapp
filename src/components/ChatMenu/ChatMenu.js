import React, {useContext} from 'react';
import ChatMenuHeader from '../ChatMenuHeader';
import ChatRoom from '../ChatRoom';
import { ChatMenuContainer } from './ChatMenu.style';
import CreateNewChatRoomBtn from '../CreateNewChatRoomBtn';

const ChatMenu = ({chatRooms}) => {

    const createNewChat = () => {
        alert('New chat has been created')
    };
    console.log('chatRooms', chatRooms)

    return (
        <ChatMenuContainer>
            <ChatMenuHeader />
            <ChatRoom
                //ownerImg={owner1}
                ownerName={"Luciana Gutierrez"}
                lastMsg={"Si tengo alguna otra novedad te comento. Gracias!"}
                msgTime={"10:20AM"}
            />
            <ChatRoom
                //ownerImg={owner2}
                ownerName={"Micaela Álvarez"}
                lastMsg={"Dale, agendé la meeting para hoy a las 14hs."}
                msgTime={"10:15AM"}
                selected
            />
            <ChatRoom
                //ownerImg={owner3}
                ownerName={"Manuel Hoffmann"}
                lastMsg={"Gracias a vos!"}
                msgTime={"9:37AM"}
            />
            <CreateNewChatRoomBtn 
                btnCallback={createNewChat}
            />
        </ChatMenuContainer>
    );
}

export default ChatMenu;