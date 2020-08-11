import { createReducer } from '@reduxjs/toolkit'
import { GET_TOKEN, GET_TOKEN_SUCCESS, GET_TOKEN_ERROR } from './constants'

const INITIAL_STATE = {
    isFetching: false,
    token: null,
    error: null,
}

const HANDLERS = {
    [GET_TOKEN]: (state) => ({ ...state, isFetching: true }),
    [GET_TOKEN_SUCCESS]: (state, { payload }) => ({
        ...state,
        isFetching: false,
        token: payload,
    }),
    [GET_TOKEN_ERROR]: (state, { payload }) => ({
        ...state,
        isFetching: false,
        error: payload,
    }),
}

export default createReducer(INITIAL_STATE, HANDLERS)
