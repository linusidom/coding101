import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: [],
        post: {}
    },
    reducers:{
        fetchPosts(state, action){
            state.posts = [action.payload]
        },
        addNewPost(state, action){
            state.posts = state.posts.concat(action.payload)
            state.post = action.payload
        }
    }
})

export const fetchPosts = () => async (dispatch) => {
    await fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(data => dispatch(postSlice.actions.fetchPosts(data)))

}

export const addNewPost = (post) => async (dispatch) => {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => dispatch(postSlice.actions.addNewPost(data)))
}

export default postSlice.reducer