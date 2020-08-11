import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'modules/auth'
import imagesReducer from 'modules/images'

export default configureStore({
  reducer: {
    auth: authReducer,
    images: imagesReducer,
  },
});
