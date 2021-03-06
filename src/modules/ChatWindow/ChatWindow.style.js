import styled from "styled-components";

const ChatWindowContainer = styled.div`
    background-color: #e9e9e9;
    flex-basis: 65%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 600px) {
        flex-basis: 100%;
    }
`;

export { ChatWindowContainer };