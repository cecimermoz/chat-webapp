import React, { useState } from 'react';
import { ChatFormStyled } from './ChatForm.style';

const ChatForm = () => {
    const [msg, setMsg] = useState('');

    const handleChange = (e) => {
        setMsg(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(msg)
    }

    return (
        <ChatFormStyled onSubmit={handleSubmit}>
            <input type='text' placeholder='Type your message...' onChange={handleChange} />
            <button type='submit'>send</button> 
        </ChatFormStyled>
    );
}

export default ChatForm;
