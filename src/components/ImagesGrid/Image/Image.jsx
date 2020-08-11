import React from 'react';
import styled from './styled.module.scss'

export const Image = ({ url }) => {
    return (
        <img src={url} title="image" className={styled.image} />
    );
};
