import React, { useContext, useState } from 'react';
import { ChatRoomsContext } from '../../models/ChatRoomsContext';
import { BtnStyled, ChatFormStyled, InputStyled } from './ChatForm.style';

const ChatForm = () => {
    const [msg, setMsg] = useState('');
    const { writeNerMsg } = useContext(ChatRoomsContext)

    const handleChange = (e) => {
        setMsg(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        writeNerMsg(msg)
        setMsg('')
    }

    return (
        <ChatFormStyled onSubmit={handleSubmit}>
            <InputStyled type='text' placeholder='Type your message...' onChange={handleChange} value={msg} />
            <BtnStyled type='submit'>
                <span className="icon material-icons-outlined">send</span>
                <span className="btnText">send</span>
            </BtnStyled> 
        </ChatFormStyled>
    );
}

export default ChatForm;
