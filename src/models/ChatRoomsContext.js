import React, {useState,createContext} from 'react';
import { FETCHED_DATA } from './sessionChats';

export const ChatRoomsContext = createContext(FETCHED_DATA.CHAT_ROOMS);

export const Context = ({children}) => {
    const [rooms, setRooms] = useState(FETCHED_DATA.CHAT_ROOMS);
    const [selectedRoom, setSelectedRoom] = useState(FETCHED_DATA.CHAT_ROOMS[1]);
    const [selectedRoomMsgs, setSelectedRoomMsgs] = useState(FETCHED_DATA.CHAT_ROOMS[1].MESSAGES);
    const generateID = (type) => `${type}${Math.random().toString(36).substring(2, 9)}`;
    const getTime = () => {
        let now = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        return now;
    }

    const writeNerMsg = (msg) => {
        let newMsg = {
            "ID": generateID('msg_'), 
            "TIME": getTime(), 
            "IS_OWNER_MSG": false,
            "TEXT": msg, 
        }
        setSelectedRoomMsgs([...selectedRoomMsgs, newMsg]);
    }

    const values = {
        rooms,
        setRooms,
        selectedRoom,
        setSelectedRoom,
        selectedRoomMsgs,
        writeNerMsg,
    }

    return(
        <ChatRoomsContext.Provider value={values}>
            {children}
        </ChatRoomsContext.Provider>
    )
}
