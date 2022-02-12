import {configureStore} from '@reduxjs/toolkit'

import alertReducer from './AlertStore'
import restaurantReducer from './RestaurantStore'
import reviewReducer from './ReviewStore'
import userReducer from './UserStore'


export const store = configureStore({
    reducer:{
        alert: alertReducer,
        restaurant: restaurantReducer,
        review: reviewReducer,
        user: userReducer
    }
})