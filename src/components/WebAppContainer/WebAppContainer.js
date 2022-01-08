import React, { useState } from 'react';
import { FETCHED_DATA } from '../../models/sessionChats';
import ChatMenu from '../ChatMenu';
import ChatWindow from '../ChatWindow';
import { Container } from './WebAppContainer.style';

const Context = React.createContext(FETCHED_DATA);

const WebAppContainer = () => {
    const [actualChat, setActualChat] = useState(null)
    
    return (
        <Container>
            <Context.Consumer>
                {
                    value => {
                        setActualChat(value.CHAT_ROOMS[1])
                        return (
                            <>
                                <ChatMenu 
                                    chatRooms={value.CHAT_ROOMS}
                                />
                                <ChatWindow 
                                    chatInfo={actualChat}
                                />
                            </>
                        )
                    }
                }
            </Context.Consumer>
        </Container>
    );
}

export default WebAppContainer;
