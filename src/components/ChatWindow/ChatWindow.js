import React from 'react';
import ChatForm from '../ChatForm';
import ChatWindowContent from '../ChatWindowContent';
import ChatWindowHeader from '../ChatWindowHeader';
import { ChatWindowContainer } from './ChatWindow.style';

const ChatWindow = ({chatInfo}) => {
    const {GUEST_IMAGE, MESSAGES, IMAGE} = chatInfo

    return (
        <ChatWindowContainer>
            <ChatWindowHeader chatInfo={chatInfo}/>
            <ChatWindowContent 
                messages={MESSAGES}
                ownerImg={IMAGE}
                guestImg={GUEST_IMAGE}
            />
            <ChatForm />
        </ChatWindowContainer>
    );
}

export default ChatWindow;