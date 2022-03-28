import React, { useState, createContext, useEffect, useRef} from 'react';
import { FETCHED_DATA } from './sessionChats';
import owner4 from "../assets/owner-4.png";
export const ChatRoomsContext = createContext(FETCHED_DATA.CHAT_ROOMS);

export const Context = ({children}) => {
    const [rooms, setRooms] = useState(FETCHED_DATA.CHAT_ROOMS);
    const [selectedRoom, setSelectedRoom] = useState(FETCHED_DATA.CHAT_ROOMS[1]);
    const [selectedRoomMsgs, setSelectedRoomMsgs] = useState(FETCHED_DATA.CHAT_ROOMS[1].MESSAGES);
    const [owner, setOwner] = useState(null)
    const [lastMsgOrder, setLastMsgOrder] = useState(0)
    const chatContainerRef = useRef();

    const generateID = (type) => `${type}${Math.random().toString(36).substring(2, 9)}`;
    
    const getTime = () => {
        const now = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
        return now;
    }

    const generateOwner = () => {
        fetch('https://randomuser.me/api')
        .then(result => result.json())
        .then(data => setOwner(data.results[0]))
        .catch(er => console.error(er));
    }

    const getScroll = () => {
        const msgs = chatContainerRef.current.children;
        const lastMsg = msgs[msgs.length-1];
        lastMsg.scrollIntoView(false)
    }

    const selectRoomToView = (room) => {
        setSelectedRoom(room);
        setSelectedRoomMsgs(room.MESSAGES)
    }

    const writeNerMsg = (msg) => {
        if(msg === '') return;
        const newMsg = {
            "ID": generateID('msg_'), 
            "TIME": getTime(), 
            "IS_OWNER_MSG": false,
            "TEXT": msg, 
        }
        setSelectedRoomMsgs([...selectedRoomMsgs, newMsg]);
        FETCHED_DATA.CHAT_ROOMS.find( fetchRoom => fetchRoom.OWNER_ID === selectedRoom.OWNER_ID).MESSAGES.push(newMsg)
        getScroll();
        updateRoomPosition();
    }

    const updateRoomPosition = () => {
        setLastMsgOrder(lastMsgOrder - 1);
        const updatedRoom = {
            ...selectedRoom,
            ORDER: lastMsgOrder
        }
        const otherRooms = rooms.filter(room => room.OWNER_ID !== updatedRoom.OWNER_ID)
        setSelectedRoom(updatedRoom)
        setRooms([updatedRoom, ...otherRooms])
    }

    const createNewRoom = (msg) => {
        generateOwner();
        setLastMsgOrder(lastMsgOrder - 1);
        let newRoom = {
            "OWNER_ID": generateID('ow_'),
            "ORDER": lastMsgOrder,
            "NAME": `${owner.name.first} ${owner.name.last}`, 
            "AREA": "Co-Worker", // Didn't find any entry in the data that applys for this
            "IMAGE": owner.picture.medium,
            "GUEST_IMAGE": owner4,
            "MESSAGES": []
        }
        setRooms([...rooms, newRoom]);
        FETCHED_DATA.CHAT_ROOMS.push(newRoom)
        selectRoomToView(newRoom)
    }

    useEffect(() => {
        generateOwner();    
    }, [])

    const values = {
        chatContainerRef,
        getScroll,
        rooms,
        setRooms,
        selectedRoom,
        setSelectedRoom,
        selectedRoomMsgs,
        selectRoomToView,
        createNewRoom,
        writeNerMsg,
    }

    return(
        <ChatRoomsContext.Provider value={values}>
            {children}
        </ChatRoomsContext.Provider>
    )
}

