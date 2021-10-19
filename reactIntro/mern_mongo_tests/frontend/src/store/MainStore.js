import {configureStore} from '@reduxjs/toolkit'
import alertReducer from './AlertStore'
import postReducer from './PostStore'
import commentReducer from './CommentStore'


const store = configureStore({
    reducer:{
        alert: alertReducer,
        post: postReducer,
        comment: commentReducer
    }
})

export default store