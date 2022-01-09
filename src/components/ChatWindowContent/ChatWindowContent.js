import React, { useContext } from 'react';
import { ChatRoomsContext } from '../../models/ChatRoomsContext';
import ChatBox from '../ChatBox';
import { ChatBoxesContainer } from './ChatWindowContent.style';

const ChatWindowContent = () => {
    const { selectedRoom, selectedRoomMsgs } = useContext(ChatRoomsContext)
    const {GUEST_IMAGE, IMAGE} = selectedRoom;

    return (
        <ChatBoxesContainer>
            {
                selectedRoomMsgs?.map( msg => {
                    let isOwnerMsg = msg.IS_OWNER_MSG;
                    let dinamicPic = isOwnerMsg ? IMAGE : GUEST_IMAGE;

                    return  <ChatBox 
                                key={msg.ID}
                                text={msg.TEXT}
                                time={msg.TIME}
                                img={dinamicPic}
                                isOwnerMsg={isOwnerMsg}
                            />
                })
            }
        </ChatBoxesContainer>
    );
}

export default ChatWindowContent;
