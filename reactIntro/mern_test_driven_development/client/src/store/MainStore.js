import {configureStore} from '@reduxjs/toolkit'
import postReducer from './PostStore'
import alertReducer from './AlertStore'

export const store = configureStore({
    reducer: {
        post: postReducer,
        alert: alertReducer
    }
})
