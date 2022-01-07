import React from 'react';
import logo from '../../assets/logo.svg';
import { ChatMenuHeaderStyled, MenuHeaderImg } from './ChatMenuHeader.style';

const ChatMenuHeader = () => {
    return (
        <ChatMenuHeaderStyled>
            <MenuHeaderImg src={logo} />
            React Chat
        </ChatMenuHeaderStyled>
    );
}

export default ChatMenuHeader;
