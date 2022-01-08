import React from 'react';
import { ImgHeader, TextHeader, WindowHeaderStyled } from './WindowHeader.style';

const WindowHeader = (props) => {
    const {img, name, area} = props;

    return (
        <WindowHeaderStyled>
            <ImgHeader><img src={img} alt={name}/></ImgHeader>
            <TextHeader>
                <p>{name}</p>
                <p>{area}</p>
            </TextHeader>
        </WindowHeaderStyled>
    );
}

export default WindowHeader;
