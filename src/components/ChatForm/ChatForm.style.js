import styled from "styled-components";

const ChatFormStyled = styled.form`
    width: 100%;
    background-color: white;
    padding: 15px;
    display: flex;
    gap: 10px;
`;

const InputStyled = styled.textarea`
    max-height: 40px;
    resize: none;
    line-height: 1;
    overflow: auto;
    padding: 10px 20px;
    color: #808080;
    border-radius: 17px;
    flex: 5;
    font-family: 'Montserrat', sans-serif;
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
    @media (max-width: 500px) {
        flex: unset;
        width: 90%;
    }
`;

const BtnStyled = styled.button`
    padding: 10px 20px;
    color: #808080;
    border-radius: 17px;
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
    &:disabled{
        cursor: not-allowed;
        color: #c5c5c5;
    }
    > .icon {
        display: none;
    }
    @media (max-width: 500px) {
        flex: unset;
        width: auto;
        padding: 10px 12px;
        border-radius: 100%;
        font-size: 10px;
        > .btnText {
            display: none;
        }
        > .icon {
            display: block;
            font-size: 16px;
        }
    }
`;

export {ChatFormStyled, InputStyled, BtnStyled};
