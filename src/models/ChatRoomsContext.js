import React, {useState,createContext} from 'react';
import { FETCHED_DATA } from './sessionChats';

export const ChatRoomsContext = createContext(FETCHED_DATA.CHAT_ROOMS);

export const Context = (props) => {
    const [rooms, setRooms] = useState(FETCHED_DATA.CHAT_ROOMS);
    const [selectedRoom, setSelectedRoom] = useState(FETCHED_DATA.CHAT_ROOMS[1]);


    return(
        <ChatRoomsContext.Provider value={{rooms, setRooms, selectedRoom, setSelectedRoom}}>
            {props.children}
        </ChatRoomsContext.Provider>
    )
}
