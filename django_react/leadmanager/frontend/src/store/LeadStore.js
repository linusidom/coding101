import { combineReducers, createStore } from "redux";
import leadReducer from './LeadReducer'
import { configureStore } from '@reduxjs/toolkit'
import alertReducer from "./AlertReducer";
import authReducer from './AuthReducer'
  
const store = configureStore({
    reducer: {
        lead: leadReducer,
        alert: alertReducer,
        auth: authReducer
    }
})



export default store