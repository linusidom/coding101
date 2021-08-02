import {configureStore} from '@reduxjs/toolkit'
import itemReducer from './ItemStore'

const store = configureStore({
    reducer:{
        item: itemReducer
    }
})

export default store