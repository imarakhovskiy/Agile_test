import React from 'react';
import styled from './styled.module.scss'

export const Image = ({ url, onClick }) => {
    return (
        <img
            src={url}
            alt="gallery item"
            className={styled.image}
            onClick={onClick}
        />
    );
};
