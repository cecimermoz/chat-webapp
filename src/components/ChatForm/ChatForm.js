import React, { useContext, useState } from 'react';
import { ChatRoomsContext } from '../../models/ChatRoomsContext';
import { ChatFormStyled } from './ChatForm.style';

const ChatForm = () => {
    const [msg, setMsg] = useState('');
    const { writeNerMsg } = useContext(ChatRoomsContext)

    const handleChange = (e) => {
        setMsg(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        writeNerMsg(msg)
    }

    return (
        <ChatFormStyled onSubmit={handleSubmit}>
            <input type='text' placeholder='Type your message...' onChange={handleChange} />
            <button type='submit'>send</button> 
        </ChatFormStyled>
    );
}

export default ChatForm;
