import React from 'react';
import { Image } from './Image'
import styled from './styled.module.scss'

export const ImagesGrid = ({ images }) => {
    return (
        <div className={styled.imagesGrid}>
            {images.map(({ cropped_picture, id }) =>
                <Image key={id} url={cropped_picture} />
            )}
        </div>
    );
};
