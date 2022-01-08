import React from 'react';
import { ImgHeader, TextHeader, WindowHeaderStyled } from './ChatWindowHeader.style';

const ChatWindowHeader = ({chatInfo}) => {
    const {IMAGE, NAME, AREA} = chatInfo;
    console.log(chatInfo)

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
