import {configureStore} from "@reduxjs/toolkit"
import alertReducer from './AlertStore'
import courseReducer from './CourseStore'
import userReducer from './UserStore'
import cartReducer from './CartStore'

export const store = configureStore({
    reducer:{
        alert: alertReducer,
        course: courseReducer,
        user: userReducer,
        cart: cartReducer
    }
})