import React from 'react';
import { Image } from '../Image'
import styled from './styled.module.scss'

export const ImagesGrid = ({ images, openInFullscreen }) => {
    return (
        <div className={styled.imagesGrid}>
            {images.map(({ cropped_picture, id }, index) =>
                <Image
                    key={id}
                    url={cropped_picture}
                    onClick={() => {
                        openInFullscreen(index)
                    }}
                />
            )}
        </div>
    );
};
