import { createReducer } from '@reduxjs/toolkit'
import {
    GET_IMAGES,
    GET_IMAGES_SUCCESS,
    GET_IMAGES_ERROR,
    GET_IMAGE_BY_ID,
    GET_IMAGE_BY_ID_SUCCESS,
    GET_IMAGE_BY_ID_ERROR
} from './constants'

const INITIAL_STATE = {
    imagesArr: {
        isFetching: false,
        error: null,
        hasMore: false,
        page: 0,
        pageCount: 0,
        pictures: []
    },
    imagesById: {},
}

const HANDLERS = {
    [GET_IMAGES]: (state) => ({ ...state, imagesArr: {
            ...state.imagesArr, isFetching: true
        }}),
    [GET_IMAGES_SUCCESS]: (state, { payload }) => ({
            ...state,
            imagesArr: {
                ...state.imagesArr,
                isFetching: false,
                ...payload,
            },
        }),
    [GET_IMAGES_ERROR]: (state, { payload }) => ({
            ...state,
            imagesArr: {
                ...state.imagesArr,
                isFetching: false,
                error: payload,
            }
        }),
    [GET_IMAGE_BY_ID]: (state, { payload }) => ({ ...state, imagesById: {
            ...state.imagesById,
            [payload]: {
                isFetching: true,
                error: null,
                info: null,
            }
        }}),
    [GET_IMAGE_BY_ID_SUCCESS]: (state, { payload: { id, ...rest } }) => ({
        ...state,
        imagesById: {
            ...state.imagesById,
            [id]: {
                ...state.imagesById[id],
                isFetching: false,
                id,
                ...rest
            }
        }
    }),
    [GET_IMAGE_BY_ID_ERROR]: (state, { payload: { id, error } }) => ({
        ...state,
        imagesById: {
            ...state.imagesById,
            [id]: {
                ...state.imagesById[id],
                isFetching: false,
                error
            }
        }
    }),
}

export default createReducer(INITIAL_STATE, HANDLERS)
