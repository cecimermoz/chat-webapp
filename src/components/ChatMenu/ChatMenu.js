import React from 'react';
import ChatMenuHeader from '../ChatMenuHeader';
import ChatRoom from '../ChatRoom';
import { ChatMenuContainer } from './ChatMenu.style';

import owner1 from "../../assets/owner-1.png";
import owner2 from "../../assets/owner-2.png";
import owner3 from "../../assets/owner-3.png";

const ChatMenu = () => {
    return (
        <ChatMenuContainer>
            <ChatMenuHeader />
            <ChatRoom
                ownerImg={owner1}
                ownerName={"Luciana Gutierrez"}
                lastMsg={"Si tengo alguna otra novedad te comento. Gracias!"}
                msgTime={"10:20AM"}
            />
            <ChatRoom
                ownerImg={owner2}
                ownerName={"Micaela Álvarez"}
                lastMsg={"Dale, agendé la meeting para hoy a las 14hs."}
                msgTime={"10:15AM"}
                selected
            />
            <ChatRoom
                ownerImg={owner3}
                ownerName={"Manuel Hoffmann"}
                lastMsg={"Gracias a vos!"}
                msgTime={"9:37AM"}
            />
        </ChatMenuContainer>
    );
}

export default ChatMenu;