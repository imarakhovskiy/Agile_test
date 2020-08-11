import { createAction } from '@reduxjs/toolkit'
import API, { IMAGES } from 'api'
import {
    GET_IMAGES,
    GET_IMAGES_SUCCESS,
    GET_IMAGES_ERROR,
    GET_IMAGE_BY_ID,
    GET_IMAGE_BY_ID_SUCCESS,
    GET_IMAGE_BY_ID_ERROR
} from './constants'

export const getImages = createAction(GET_IMAGES)
export const getImagesSuccess = createAction(GET_IMAGES_SUCCESS)
export const getImagesError = createAction(GET_IMAGES_ERROR)

export const getImageById = createAction(GET_IMAGE_BY_ID)
export const getImageByIdSuccess = createAction(GET_IMAGE_BY_ID_SUCCESS)
export const getImageByIdError = createAction(GET_IMAGE_BY_ID_ERROR)

export const fetchImages = dispatch => (token, page) => {
    dispatch(getImages())
    return API.get(`${IMAGES}${page ? `?page=${page}` : ''}`, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
        .then(res => {dispatch(getImagesSuccess(res))})
        .catch(error => {dispatch(getImagesError(error))})
}

export const fetchImageById = dispatch => (token, id) => {
    dispatch(getImageById(id))
    return API.get(`${IMAGES}/${id}`, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
        .then((data) => {dispatch(getImageByIdSuccess(data))})
        .catch(err => {dispatch(getImageByIdError({ id, err }))})
}
