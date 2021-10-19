import { createSlice } from "@reduxjs/toolkit";
import { alertSliceActions } from "./AlertStore";


export const postListView = () => async (dispatch) => {
    fetch('/posts')
    .then(res => res.json())
    .then(data => {
        dispatch(postSlice.actions.loadPosts(data))
    })
}


export const postDeleteView = (postID) => async (dispatch) => {
    fetch(`/posts/${postID}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        // setPosts(prevPosts => prevPosts.filter(post => post._id !== postID))
        
        if(data.message){
            dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))    
        } else{
            dispatch(postSlice.actions.deletePost(data))
            dispatch(alertSliceActions.showAlert({message:"Post Delete", variant:'success'}))
        }
        

    })
}

const postSlice = createSlice({
    name: 'post',
    initialState:{
        posts: [],
        post: {}
    },
    reducers:{
        loadPosts(state, action){
            return{
                ...state,
                posts: action.payload,
                post: action.payload[0]
            }
        },
        deletePost(state, action){
            const updated = state.posts.filter(post => post._id !== action.payload._id)
            return{
                ...state,
                posts: updated,
                post: updated[0]
            }
        },
        clearPost(state, action){
            return{
                ...state,
                posts:[],
                post:{}
            }
        },
        
    }
})

export const postSliceActions = postSlice.actions

export default postSlice.reducer