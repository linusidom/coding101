import { createSlice } from "@reduxjs/toolkit";
import { alertSliceActions } from "./AlertStore";


export const postListView = () => async (dispatch) => {
    let res = await fetch('/posts')

    let data = await res.json()

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        dispatch(postSliceActions.postList(data))
        return true
    }
}

export const postCreateView = (postObj) => async (dispatch) => {
    let res = await fetch('/posts',{
        method:'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(postObj)
    })

    let data = await res.json()

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        dispatch(postSliceActions.postCreate(data))
        return true
    }
}

export const postDetailView = (postID) => async (dispatch) => {
    let res = await fetch(`/posts/${postID}`)

    let data = await res.json()

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        dispatch(postSliceActions.postDetail(data))
        return true
    }
}

export const postUpdateView = (postID, postObj) => async (dispatch) => {
    let res = await fetch(`/posts/${postID}`,{
        method: 'PUT',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(postObj)
    })

    let data = await res.json()

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        dispatch(postSliceActions.postUpdate(data))
        return true
    }
}

export const postDeleteView = (postID) => async (dispatch) => {
    let res = await fetch(`/posts/${postID}`,{
        method: 'DELETE'
    })

    let data = await res.json()

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        dispatch(postSliceActions.postDelete(data))
        return true
    }
}



export const postResetStore = () => async (dispatch) => {
    dispatch(postSliceActions.postReset())
}

const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts:[],
        post:{}
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
            
            const updatedPost = state.posts.map(post => post._id === action.payload._id ? {...post, ...action.payload} : {...post})
            
            return{
                ...state,
                posts: updatedPost,
                post: action.payload
            }
        },
        postDelete(state, action){
            
            const updatedPost = state.posts.filter(post => post._id !== action.payload)

            return{
                ...state,
                posts: updatedPost
            }
        },
        postReset(state, action){
            return{
                ...state,
                posts: [],
                post: {}
            }
        }
    }
})

export const postSliceActions = postSlice.actions
export default postSlice.reducer