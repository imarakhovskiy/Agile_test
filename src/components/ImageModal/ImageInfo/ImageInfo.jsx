import React from 'react';
import styled from './styled.module.scss'

export const ImageInfo = ({ author, camera, tags}) => {
    return (
        <div className={styled.imageInfo}>
            <h3 className={styled.author}>{author}</h3>
            <h4 className={styled.camera}>{camera}</h4>
            <p className={styled.tags}>{tags}</p>
        </div>
    );
};
