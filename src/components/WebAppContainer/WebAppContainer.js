import React, { useContext, useState } from 'react';
import ChatMenu from '../ChatMenu';
import ChatWindow from '../ChatWindow';
import { Container } from './WebAppContainer.style';

const WebAppContainer = () => {
    
    return (
        <Container>
            <ChatMenu />
            <ChatWindow />
        </Container>
    );
}

export default WebAppContainer;
