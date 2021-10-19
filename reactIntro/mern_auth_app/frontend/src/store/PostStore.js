import {createSlice} from '@reduxjs/toolkit'
import { alertSliceActions } from './AlertStore'




export const postListView = () => async (dispatch) => {
    let res = await fetch('/posts')

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.loadPosts(data))
    }
}


export const postCreateView = (postObj) => async (dispatch) => {
    let res = await fetch('/posts', {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(postObj)
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
        return false
    } else {
        dispatch(postSlice.actions.createPost(data))
        return true
    }
}




export const postDetailView = (postID) => async (dispatch) => {
    let res = await fetch(`/posts/${postID}`, {
        headers: {
            'Content-type':'application/json'
        }
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.detailPost(data))
    }
}


export const postUpdateView = (postID, postObj) => async (dispatch) => {
    let res = await fetch(`/posts/${postID}`, {
        method: 'PUT',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(postObj)
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.updatePost(data))
    }
}


export const postDeleteView = (postID) => async (dispatch) => {
    let res = await fetch(`/posts/${postID}`, {
        method: 'DELETE',
        headers: {
            'Content-type':'application/json'
        }
    })
    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.deletePost(postID))
        dispatch(alertSliceActions.showAlert({message:'Post Deleted', variant:'danger'}))

    }
}


// Comments
export const commentCreateView = (postID, commentObj) => async (dispatch) => {
    let res = await fetch(`/posts/${postID}/comments`, {
        method: 'PUT',
        headers: {
            'Content-type':'application/json'
            
        },
        body: JSON.stringify(commentObj)
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))

    } else {
        dispatch(postSlice.actions.updateComment(data))
        dispatch(alertSliceActions.showAlert({message:'Comment Added', variant:'success'}))

    }
}

export const commentDeleteView = (postID, commentID) => async (dispatch) => {
    let res = await fetch(`/posts/${postID}/comments/${commentID}`, {
        method: 'PUT',
        headers: {
            'Content-type':'application/json'
        },
    })

    let data = await res.json()

    console.log(data)

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.updateComment(data))
        dispatch(alertSliceActions.showAlert({message:'Comment Removed', variant:'danger'}))
    }
}




const postSlice = createSlice({
    name: 'post',
    initialState:{
        posts:[],
        post:{}
    },
    reducers: {
        loadPosts(state, action){
            return{
                ...state,
                posts:action.payload,
                post: {}
            }
        },
        createPost(state, action){
            const upd = state.posts.concat(action.payload)
            return{
                ...state,
                posts: upd
            }
        },
        detailPost(state, action){
            return{
                ...state,
                post: action.payload
            }
        },
        updatePost(state, action){
            
            const upd = state.posts.map(post => post._id === action.payload._id ? {...post, ...action.payload} : {...post})
            
            return{
                ...state,
                post: upd
            }
        },
        deletePost(state, action){

            const upd = state.posts.filter(post => post._id !== action.payload)
            return{
                ...state,
                posts: upd
            }
        },
        updateComment(state, action){
            return{
                ...state,
                post: action.payload
            }
        }

    }
})

export const postSliceActions = postSlice.actions

export default postSlice.reducer