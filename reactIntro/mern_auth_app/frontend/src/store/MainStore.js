import { configureStore } from "@reduxjs/toolkit";
import alertReducer from './AlertStore'
import userReducer from './UserStore'
import postReduder from './PostStore'

const store = configureStore({
    reducer:{
        alert: alertReducer,
        user: userReducer,
        post: postReduder
    }
})

export default store