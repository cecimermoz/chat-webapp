import React, { useContext } from 'react';
import { ChatRoomsContext } from '../../models/ChatRoomsContext';
import { ImgHeader, TextHeader, WindowHeaderStyled } from './ChatWindowHeader.style';

const ChatWindowHeader = () => {
    
    const { selectedRoom } = useContext(ChatRoomsContext)
    const { IMAGE, NAME, AREA } = selectedRoom;

    return (
        <WindowHeaderStyled>
            <ImgHeader><img src={IMAGE} alt={NAME}/></ImgHeader>
            <TextHeader>
                <p>{NAME}</p>
                <p>{AREA}</p>
            </TextHeader>
        </WindowHeaderStyled>
    );
}

export default ChatWindowHeader;
