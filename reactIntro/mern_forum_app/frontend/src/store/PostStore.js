import { createSlice } from "@reduxjs/toolkit";
import { alertSliceActions } from "./AlertStore";


export const postListView = () => async (dispatch) => {
    let res = await fetch('/posts')

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.loadPosts(data))
        return true
    }

}


export const postCreateView = (token, postObj) => async (dispatch) => {
    let res = await fetch('/posts',{
        method:'POST',
        headers: {
            'Content-type':'application/json',
            'Authorization' : `Token ${token}`
        },
        body: JSON.stringify(postObj)
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.createPost(data))
        return true
    }

}

export const postDetailView = (postID) => async (dispatch) => {
    let res = await fetch(`/posts/${postID}`)

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.detailPost(data))
        return true
    }
}

export const postUpdateView = (token, postID, postObj) => async (dispatch) => {
    let res = await fetch(`/posts/${postID}`,{
        method: 'PUT',
        headers: {
            'Content-type':'application/json',
            'Authorization' : `Token ${token}`
        },
        body: JSON.stringify(postObj)
    })

    let data = await res.json()
    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.updatePost(data))
        return true
    }

}


export const postDeleteView = (token, postID) => async (dispatch) => {
    let res = await fetch(`/posts/${postID}`,{
        method: 'DELETE',
        headers: {
            'Content-type':'application/json',
            'Authorization' : `Token ${token}`
        }
    })

    let data = await res.json()
    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.deletePost(data))
        return true
    }

}


export const commentCreateView = (token, postID, commentObj) => async (dispatch) => {
    let res = await fetch(`/posts/${postID}/comments`,{
        method: 'PUT',
        headers: {
            'Content-type':'application/json',
            'Authorization' : `Token ${token}`
        },
        body: JSON.stringify(commentObj)
    })

    let data = await res.json()
    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.updatePost(data))
        return true
    }
}

export const commentDeleteView = (token, postID, commentID) => async (dispatch) => {
    let res = await fetch(`/posts/${postID}/comments/${commentID}`,{
        method: 'PUT',
        headers: {
            'Content-type':'application/json',
            'Authorization' : `Token ${token}`
        }
    })

    let data = await res.json()
    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.updatePost(data))
        return true
    }
}

const postSlice = createSlice({
    name: 'post',
    initialState:{
        posts:[],
        post: {}
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
        detailPost(state, action){
            return{
                ...state,
                post: action.payload
            }
        },
        updatePost(state, action){
            
            const updatedPosts = state.posts.map(post => post._id === action.payload._id ? {...post, ...action.payload} : {...post})
            
            return{
                ...state,
                post: action.payload,
                posts: updatedPosts
            }
        },
        deletePost(state, action){
            
            const updatedPosts = state.posts.filter(post => post._id !== action.payload)
            
            return{
                ...state,
                post: {},
                posts: updatedPosts
            }
        }
        
    }
})

export const postSliceActions = postSlice.actions

export default postSlice.reducer