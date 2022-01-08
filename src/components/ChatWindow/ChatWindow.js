import React from 'react';
import ChatWindowHeader from '../ChatWindowHeader';
import { ChatWindowContainer } from './ChatWindow.style';

const ChatWindow = ({chatInfo}) => {
    console.log('chatInfo', chatInfo)

    return (
        <ChatWindowContainer>
            <ChatWindowHeader chatInfo={chatInfo}/>
        </ChatWindowContainer>
    );
}

export default ChatWindow;