import styled from "styled-components";

const ChatMenuContainer = styled.div`
    background-color: #212121;
    flex-basis: 37%;
    display: flex;
    flex-direction: column;
    @media (max-width: 600px) {
        flex-basis: unset;
    }
`;

const ChatRoomsContainer = styled.div`
    overflow: auto;
`;

export { ChatMenuContainer, ChatRoomsContainer };