import styled from "styled-components";

const ChatBoxesContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 40px 30px;
    flex: 1;
    overflow: auto;
    @media (max-width: 400px) {
        padding: 20px 15px;
    }
`;

export {ChatBoxesContainer};