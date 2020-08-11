import React from 'react';
import closeIcon from 'icons/close.png'
import styled from './styled.module.scss'

export const CloseButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className={styled.closeButton}>
            <img src={closeIcon} alt="Close button" />
        </button>
    );
};
