import React from 'react';
import ChatForm from '../../components/ChatForm';
import ChatWindowHeader from '../../components/ChatWindowHeader';
import ChatWindowContent from '../../components/ChatWindowContent';
import { ChatWindowContainer } from './ChatWindow.style';

const ChatWindow = () => {    

    return (
        <ChatWindowContainer>
            <ChatWindowHeader/>
            <ChatWindowContent />
            <ChatForm />
        </ChatWindowContainer>
    );
}

export default ChatWindow;