import React from 'react';
import ChatWindow from '../ChatWindow';
import ChatMenu from '../ChatMenu';
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
