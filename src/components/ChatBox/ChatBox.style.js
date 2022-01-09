import styled from "styled-components";

const ChatBoxStyled = styled.div`
    display: flex;
    align-items: flex-start;
    align-self: ${props => props.isOwnerMsg ? 'auto' : 'flex-end'};
    flex-direction: ${props => props.isOwnerMsg ? 'row' : 'row-reverse'};
    > img {
        width: 40px;
        border-radius: 100%;
        margin: ${props => props.isOwnerMsg ? '0 20px 0 0' : '0 0 0 20px'};
    }
`;

const ChatBubble = styled.div`
    background-color: ${props => props.isOwnerMsg ? '#fff' : '#fceded'}; 
    max-width: 300px;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    position: relative;
    border-radius: 4px;
    &::before{
        content: '';
        overflow: hidden;
        position: absolute;
        top: 0;
        width: 0;
        height: 0;
        transform: ${props => !props.isOwnerMsg && 'scaleX(-1)'};
        left: ${props => props.isOwnerMsg && '-10px'};
        right: ${props => !props.isOwnerMsg && '-10px'};
        border: 0 solid transparent;
        border-top-width: 0px;
        border-bottom-width: 25px;
        border-right: ${props => props.isOwnerMsg ? '20px solid #fff' : '20px solid #fceded'};
    }
`;

const TimeStyled = styled.span`
    position: absolute;
    font-size: 10px;
    color: #8c8c8c;
    top: -16px;
    right: ${props => props.isOwnerMsg ? '10px' : ''};
    left: ${props => props.isOwnerMsg ? '' : '5px'};
`;
const TextStyled = styled.span`
    font-size: 14px;
    line-height: 18px;
    color: #8c8c8c;
    font-weight: 500;
`;

export { ChatBoxStyled, ChatBubble, TimeStyled, TextStyled };
