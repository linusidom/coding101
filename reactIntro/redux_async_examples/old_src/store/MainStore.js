import {configureStore} from '@reduxjs/toolkit'
import itemReducer from './ItemStore'
import cartReducer from './CartStore'
import toggleReducer from './ToggleStore'


const store = configureStore({
    reducer:{
        item: itemReducer,
        cart: cartReducer,
        toggle: toggleReducer
    }
})

export default store