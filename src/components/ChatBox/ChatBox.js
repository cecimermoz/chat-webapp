import React from 'react';
import { ChatBoxStyled, ChatBubble, TextStyled, TimeStyled } from './ChatBox.style';

const ChatBox = (props) => {
    
    const { text, time, img, isOwnerMsg, isTheLastElement } = props;
    
    return (
        <ChatBoxStyled 
            id={isTheLastElement ? 'scroll-target' : ''}
            isOwnerMsg={isOwnerMsg}
        >
            <img src={img} alt="message's sender" />
            <ChatBubble isOwnerMsg={isOwnerMsg}>
                <TimeStyled isOwnerMsg={isOwnerMsg}>{time}</TimeStyled>
                <TextStyled>{ text }</TextStyled>
            </ChatBubble>
        </ChatBoxStyled>
    );
}

export default ChatBox;
