import { createAction } from '@reduxjs/toolkit'
import API, { AUTH } from 'api'
import { GET_TOKEN, GET_TOKEN_SUCCESS, GET_TOKEN_ERROR } from './constants'

export const getToken = createAction(GET_TOKEN)
export const getTokenSuccess = createAction(GET_TOKEN_SUCCESS)
export const getTokenError = createAction(GET_TOKEN_ERROR)

export const fetchToken = dispatch => () => {
    dispatch(getToken())
    return API.post(AUTH, { apiKey: process.env.REACT_APP_API_KEY })
        .then(({token}) => {
            dispatch(getTokenSuccess(token))
        })
        .catch(err => dispatch(getTokenError(err)))
}
