import React, { useContext, useState } from 'react';
import ChatMenu from '../ChatMenu';
import ChatWindow from '../ChatWindow';
import { Container } from './WebAppContainer.style';
import { ChatRoomsContext } from '../../models/ChatRoomsContext';

const WebAppContainer = () => {
    const {rooms} = useContext(ChatRoomsContext);
    //console.log('rrooomm', rooms)

    return (
        <Container>
            <ChatMenu 
                chatRooms={rooms}
            />
            <ChatWindow 
                chatInfo={rooms[1]}
            />
        </Container>
    );
}

export default WebAppContainer;
