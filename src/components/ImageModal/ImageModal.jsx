import React, { useEffect, useCallback, useRef } from 'react';
import { useSelector } from 'react-redux'
import { tokenSelector } from 'modules/auth'
import { imagesByIdSelector, fetchImageById } from 'modules/images'
import { useAction } from 'hooks/useAction'
import { CloseButton } from './CloseButton'
import { ImageInfo } from './ImageInfo'
import { Image } from 'components'
import styled from './styled.module.scss'

export const ImageModal = ({ images, currIndex, setSelectedImage, closeModal }) => {
    const imagesById = useSelector(imagesByIdSelector)
    const imageInfo = imagesById[images[currIndex].id]

    const modalRef = useRef(null)

    const fetchImage = useCallback(useAction(fetchImageById), [fetchImageById]),
      token = useSelector(tokenSelector)
    const handleKeyPress = useCallback(e => {
        if (e.keyCode === 37) {
            setSelectedImage(Math.max(currIndex - 1, 0))
        } else if (e.keyCode === 39) {
            setSelectedImage(Math.min(currIndex + 1, images.length - 1))
        }
    }, [currIndex])

    useEffect(() => {
        !imageInfo && fetchImage(token, images[currIndex].id)
    }, [currIndex, fetchImage, token, images])

    useEffect(() => {
        modalRef.current.focus()
    }, [])

    return (
        <div ref={modalRef} className={styled.modal} tabIndex={0} onKeyDown={handleKeyPress}>
            <CloseButton onClick={closeModal} />
            {imageInfo && <>
                <Image url={imageInfo.full_picture} />
                <ImageInfo author={imageInfo.author} camera={imageInfo.camera} tags={imageInfo.tags} />
            </>}
        </div>
    );
};
