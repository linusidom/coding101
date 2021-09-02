import {configureStore} from '@reduxjs/toolkit'
import alertReducer from './AlertStore'
import authReducer from './AuthStore'

const store = configureStore({
    reducer:{
        alert: alertReducer,
        auth: authReducer
    }
})

export default store