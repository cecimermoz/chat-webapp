import React from 'react';
import ChatBox from '../ChatBox';
import { ChatBoxesContainer } from './ChatWindowContent.style';

const ChatWindowContent = (props) => {
    const { messages, ownerImg, guestImg } = props;

    return (
        <ChatBoxesContainer>
            {
                messages?.map( msg => {
                    let isOwnerMsg = msg.IS_OWNER_MSG;
                    let dinamicPic = isOwnerMsg ? ownerImg : guestImg;

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
