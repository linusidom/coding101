import {configureStore} from '@reduxjs/toolkit'
import itemReducer from './ItemStore'
import cartReducer from './CartStore'



const store = configureStore({
    reducer:{
        item: itemReducer,
        cart: cartReducer
    }
})

export default store