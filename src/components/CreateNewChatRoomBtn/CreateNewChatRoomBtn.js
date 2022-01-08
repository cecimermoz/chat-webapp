import React from 'react';
import { CreateNewChatRoomBtnStyled } from './CreateNewChatRoomBtn.style';

const CreateNewChatRoomBtn = (props) => {
    const {btnCallback} = props;
    return (
        <CreateNewChatRoomBtnStyled onClick={btnCallback}>
            <span className="icon material-icons-outlined">add</span>
            <span>Create New</span>
        </CreateNewChatRoomBtnStyled>
    );
}

export default CreateNewChatRoomBtn;
