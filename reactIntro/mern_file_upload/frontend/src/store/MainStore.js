import {configureStore} from '@reduxjs/toolkit'
import alertReducer from './AlertStore'
import postReducer from './PostStore'

export const store = configureStore({
    reducer:{
        alert: alertReducer,
        post: postReducer
    }
})