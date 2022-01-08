import React from 'react';
import WindowHeader from '../WindowHeader/WindowHeader';

const ChatWindowHeader = ({chatInfo}) => {
    const {IMAGE, NAME, AREA} = chatInfo;
    console.log(chatInfo)

    return (
        <WindowHeader area={AREA} name={NAME} img={IMAGE}/>
    );
}

export default ChatWindowHeader;
