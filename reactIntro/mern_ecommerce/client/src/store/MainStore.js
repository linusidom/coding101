import {configureStore} from '@reduxjs/toolkit'
import userReducer from './UserStore'
import alertReducer from './AlertStore'
import productReducer from './ProductStore'
import cartReducer from './CartStore'
import orderReducer from './OrderStore'


export const store = configureStore({
    reducer:{
        user: userReducer,
        product: productReducer,
        alert: alertReducer,
        cart: cartReducer,
        order: orderReducer
    }
})