import styled from "styled-components";

const ChatFormStyled = styled.form`
    width: 100%;
    background-color: white;
    padding: 15px;
    display: flex;
    gap: 10px;
    > input,
    > button {
        padding: 10px 20px;
        color: #808080;
        border-radius: 17px;
    }
    
    > input {
        flex: 5;
        font-size: 16px;
        font-weight: 500;
        border: 1px solid #e9e9e9;
        &:active, &:focus{
            outline: 2px solid #8c8c8c;
        }
        &::placeholder{
            font-weight: 600;
            font-size: 16px;
        }
    } 
    > button {
        font-weight: 600;
        flex: 1;
        font-size: 16px;
        cursor: pointer;
        text-transform: uppercase;
        border: none;
        background-color: #f0f0f0;
        &:focus, &:active{
            outline: 2px solid #8c8c8c;
            
        }
    }
`;

export {ChatFormStyled};
