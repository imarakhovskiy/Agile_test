import React, { useEffect, useCallback, useState } from 'react';
import { useSelector } from 'react-redux'
import withAuth from 'hoc/withAuth'
import { useAction } from 'hooks/useAction'
import { tokenSelector } from 'modules/auth'
import { fetchImages, imagesSelector, currentLoadedPagesSelector } from 'modules/images/'
import { ImagesGrid, ImageModal } from 'components'
import './App.css';

function App() {
  const [selectedImage, setSelectedImage] = useState(-1)
  const getImages = useCallback(
    useAction(fetchImages),
    [fetchImages],
  ),
  images = useSelector(imagesSelector),
  page = useSelector(currentLoadedPagesSelector),
  token = useSelector(tokenSelector)

  const closeModal = useCallback(() => setSelectedImage(-1), [setSelectedImage])

  useEffect(() => {
    getImages(token)
  }, [getImages, token])

  return (
    <div className="App">
      {selectedImage === -1 ?
        <ImagesGrid images={images} openInFullscreen={setSelectedImage} /> : <ImageModal
          images={images}
          currIndex={selectedImage}
          setSelectedImage={setSelectedImage}
          closeModal={closeModal}
        />
      }
    </div>
  );
}

export default withAuth(App);
