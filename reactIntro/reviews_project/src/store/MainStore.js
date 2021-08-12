import {configureStore} from '@reduxjs/toolkit'
import reviewReducer from './ReviewStore'

const store = configureStore({
    reducer:{
        review: reviewReducer        
    }
})

export default store