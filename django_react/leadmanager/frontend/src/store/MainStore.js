import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import authReducer from './AuthStore'
import alertReducer from './AlertStore'
import leadReducer from './LeadStore'

const store = configureStore({
    reducer:{
        auth: authReducer,
        alert: alertReducer,
        lead: leadReducer
    }
})

export default store