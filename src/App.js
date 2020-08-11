import React, { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux'
import withAuth from 'hoc/withAuth'
import { useAction } from 'hooks/useAction'
import { tokenSelector } from 'modules/auth'
import { fetchImages, imagesSelector, currentLoadedPagesSelector } from 'modules/images/'
import { ImagesGrid } from 'components'
import './App.css';

function App() {
  const getImages = useCallback(
    useAction(fetchImages),
    [fetchImages],
  ),
  images = useSelector(imagesSelector),
  page = useSelector(currentLoadedPagesSelector),
  token = useSelector(tokenSelector)

  useEffect(() => {
    getImages(token)
  }, [getImages, token])

  return (
    <div className="App">
      <ImagesGrid images={images} />
    </div>
  );
}

export default withAuth(App);
