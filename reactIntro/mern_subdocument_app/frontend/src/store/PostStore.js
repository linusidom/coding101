import { createSlice } from "@reduxjs/toolkit";
import { alertSliceActions } from "./AlertStore";



// Async calls to the backend API endpoints
export const postCreateView = (postObj) => async (dispatch) => {

    let res = await fetch('/posts', {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(postObj)
    })
    
    let data = await res.json()
    
    console.log(data)

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        // we want to put this into the global store...

        dispatch(postSlice.actions.createPost(data))
    }
}





export const postListView = () => async (dispatch) => {

    let res = await fetch('/posts')
    
    let data = await res.json()
    
    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        // we want to put this into the global store...

        dispatch(postSlice.actions.loadPosts(data))
    }
}



export const postDetailView = (postID) => async (dispatch) => {

    let res = await fetch(`/posts/${postID}`)
    
    let data = await res.json()
    
    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        // we want to put this into the global store...

        dispatch(postSlice.actions.detailPost(data))
    }
}





export const postDeleteView = (postID) => async (dispatch) => {

    let res = await fetch(`/posts/${postID}`,{ method:'DELETE'})
    
    let data = await res.json()
    
    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        // we want to put this into the global store...

        dispatch(postSlice.actions.deletePost(postID))
    }
}




export const commentCreateView = (postID, commentObj) => async (dispatch) => {

    let res = await fetch(`/posts/${postID}/comments`,{
        method:'PUT',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(commentObj)
    })
    
    let data = await res.json()
    
    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {

        dispatch(postSlice.actions.updatePost(data))
    }
}




export const commentDeleteView = (postID, commentID) => async (dispatch) => {

    let res = await fetch(`/posts/${postID}/comments/${commentID}`,{method:'PUT'})
    
    let data = await res.json()
    
    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {

        dispatch(postSlice.actions.updatePost(data))
    }
}


// Post Slice Redux Reducers
const postSlice = createSlice({
    name: 'post',
    initialState:{
        posts: [],
        post: {}
    },
    reducers: {
        createPost(state, action){
            
            
            const updatedPosts = state.posts.concat(action.payload)
            
            return{
                ...state,
                posts: updatedPosts
            }
        },
        loadPosts(state, action){
            
            return{
                ...state,
                posts: action.payload
            }
        },
        detailPost(state, action){
            
            return{
                ...state,
                post: action.payload
            }
        },
        deletePost(state, action){
            
            const updatedPosts = state.posts.filter(post => post._id !== action.payload)

            return{
                ...state,
                posts: updatedPosts
            }
        },
        updatePost(state, action){
        
            return{
                ...state,
                post: action.payload
            }
        },
    }
})

// export reducer functions
export const postSliceActions = postSlice.actions

export default postSlice.reducer