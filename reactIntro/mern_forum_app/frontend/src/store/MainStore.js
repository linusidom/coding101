import {configureStore} from '@reduxjs/toolkit'
import alertReducer from './AlertStore'
import userReducer from './UserStore'
import postReducer from './PostStore'

export const store = configureStore({
    reducer:{
        alert: alertReducer,
        user: userReducer,
        post: postReducer
    }
})