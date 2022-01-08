import React, { useContext } from 'react';
import { ChatRoomsContext } from '../../models/ChatRoomsContext';
import ChatForm from '../ChatForm';
import ChatWindowContent from '../ChatWindowContent';
import ChatWindowHeader from '../ChatWindowHeader';
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