import {configureStore} from '@reduxjs/toolkit'
import postReducer from './PostReducer'

const store = configureStore({
    reducer:{
        post: postReducer
    }
})

export default store