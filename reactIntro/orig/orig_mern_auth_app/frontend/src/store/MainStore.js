import {configureStore} from '@reduxjs/toolkit'
import alertReducer from './AlertStore'
import userReducer from './UserStore'

export const store = configureStore({
    reducer:{
        alert: alertReducer,
        user: userReducer
    }
})