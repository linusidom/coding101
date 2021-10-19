import { createSlice } from "@reduxjs/toolkit";

const commentSlice = createSlice({
    name: 'comment',
    initialState:{
        comments: [],
        comment:{}
    },
    reducers:{
        loadComments(state, action){
            return{
                ...state,
                comments: action.payload,
                comment: action.payload[0]
            }
        },
        clearComments(state, action){
            return{
                ...state,
                comments: [],
                comment:{}
            }
        },
        
    }
})

export const commentSliceActions = commentSlice.actions

export default commentSlice.reducer