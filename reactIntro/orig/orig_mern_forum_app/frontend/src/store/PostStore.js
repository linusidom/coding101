import { createSlice } from "@reduxjs/toolkit";
import { alertSliceActions } from "./AlertStore";

export const postListView = () => async (dispatch) => {
    let res = await fetch('/posts/')

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.postList(data))
        return true
    }
}

export const postCreateView = (token, postObj) => async (dispatch) => {
    let res = await fetch('/posts/',{
        method: 'POST',
        headers: {
            'Content-type':'application/json',
            'Authorization':`Token ${token}`
        },
        body: JSON.stringify(postObj)
    })

    let data = await res.json()

    console.log(data)

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.postCreate(data))
        dispatch(alertSliceActions.showAlert({message:'Post Created Successfully', variant:'success'}))
        return true
    }
}



export const postDetailView = (token, postID) => async (dispatch) => {
    let res = await fetch(`/posts/${postID}`,{
        headers: {
            'Content-type':'application/json',
            'Authorization':`Token ${token}`
        }
    })

    let data = await res.json()


    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.postDetail(data))
        return true
    }
}

export const postUpdateView = (token, postID, postObj) => async (dispatch) => {
    let res = await fetch(`/posts/${postID}`,{
        method:'PUT',
        headers: {
            'Content-type':'application/json',
            'Authorization':`Token ${token}`
        },
        body: JSON.stringify(postObj)
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.postUpdate(data))
        return true
    }
}


export const postDeleteView = (token, postID) => async (dispatch) => {
    let res = await fetch(`/posts/${postID}`,{
        method:'DELETE',
        headers: {
            'Content-type':'application/json',
            'Authorization':`Token ${token}`
        }
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.postDelete(postID))
        return true
    }
}


// Comments
export const commentCreateView = (token, postID, commentObj) => async (dispatch) => {
    let res = await fetch(`/posts/${postID}/comments`,{
        method:'PUT',
        headers: {
            'Content-type':'application/json',
            'Authorization':`Token ${token}`
        },
        body: JSON.stringify(commentObj)
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.commentCreate(data))
        return true
    }
}

export const commentDeleteView = (token, postID, commentID) => async (dispatch) => {
    let res = await fetch(`/posts/${postID}/comments/${commentID}`,{
        method:'PUT',
        headers: {
            'Content-type':'application/json',
            'Authorization':`Token ${token}`
        }
    })

    let data = await res.json()

    if(data.message){
        dispatch(alertSliceActions.showAlert({message:data.message, variant:'danger'}))
    } else {
        dispatch(postSlice.actions.commentDelete(data))
        return true
    }
}







const postSlice = createSlice({
    name:'post',
    initialState:{
        posts: [],
        post: {}
    },
    reducers:{
        postList(state, action){
            return{
                ...state,
                posts: action.payload
            }
        },
        postCreate(state, action){
            return{
                ...state,
                posts: [action.payload].concat(state.posts)
            }
        },
        postDetail(state, action){
            return{
                ...state,
                post: action.payload
            }
        },
        postUpdate(state, action){
            return{
                ...state,
                post: action.payload
            }
        },
        postDelete(state, action){
            const postUpdate = state.posts.filter(post => post._id !== action.payload)
            return{
                ...state,
                posts: postUpdate
            }
        },
        commentCreate(state, action){
            const updatedPosts = state.posts.map(post => post._id === action.payload._id ? {...post, ...action.payload} : {...post})
            return{
                ...state,
                posts: updatedPosts,
                post: action.payload
            }
        },
        commentDelete(state, action){
            return{
                ...state,
                post: action.payload
            }
        },
    }
})

export const postSliceActions = postSlice.actions

export default postSlice.reducer