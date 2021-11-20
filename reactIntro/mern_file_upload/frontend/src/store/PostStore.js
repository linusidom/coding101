import { createSlice } from "@reduxjs/toolkit";
import {alertSliceActions} from './AlertStore'

// PostListView
export const postListView = () => async (dispatch) => {
    let res = await fetch('/posts')

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.loadPosts(data))
    }
}


// Post Create One View
export const postCreateOneView = (postObj) => async (dispatch) => {
    
    console.log(...postObj)
    let res = await fetch('/posts/createOne',{
        method:'POST',
        body: postObj
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.createPost(data))
    }
}



// Create Multiple View
export const postCreateMultipleView = (postObj) => async (dispatch) => {
    
    console.log(...postObj)
    let res = await fetch('/posts/createMultiple',{
        method:'POST',
        body: postObj
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.createPost(data))
    }
}



// Create PDF View
export const postCreatePDFView = (postObj) => async (dispatch) => {
    
    console.log(...postObj)
    let res = await fetch('/posts/createPDF',{
        method:'POST',
        body: postObj
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.createPost(data))
    }
}















// Post Delete View
export const postDeleteView = (postID) => async (dispatch) => {
    
    let res = await fetch(`/posts/delete/${postID}`,{
        method:'DELETE',
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.deletePost(postID))
    }
}



const postSlice = createSlice({
    name: 'post',
    initialState:{
        posts: []
    },
    reducers:{
        loadPosts(state, action){
            return{
                ...state,
                posts: action.payload
            }
        },
        createPost(state, action){
            return{
                ...state,
                posts: [action.payload].concat(state.posts)
            }
        },
        deletePost(state, action){
            
            const updatedPosts = state.posts.filter(post => post._id !== action.payload)
            
            return{
                ...state,
                posts: updatedPosts
            }
        },
    }
})

export const postSliceActions = postSlice.actions
export default postSlice.reducer