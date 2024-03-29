import { createSlice } from "@reduxjs/toolkit";

// For the purposes of hosting and examples I have reintroduced the local data store instead of Firebase
import data from '../data'


const url = 'https://reviews-64824-default-rtdb.firebaseio.com/reviews.json'

export const getDataFromFirebase = () => async (dispatch) => {
    await fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        const tempReviewArr = []
        for(let key in data){
            const tempObject = {
                ...data[key],
                id: key
            }
            tempReviewArr.push(tempObject)
        }
        // console.log(tempReviewArr)
        dispatch(reviewSlice.actions.loadReviews(tempReviewArr))

    })
}

export const createDataInFirebase = (newReview) => async (dispatch) => {
    await fetch(url, {
        method: 'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(newReview)
    })
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        dispatch(reviewSlice.actions.createReview())
    })
}




const reviewSlice = createSlice({
    name:'review',
    initialState:{
        // Settings for Firebase
        // reviews:[],
        // review:{},
        // initial: true
        reviews: data,
        review: data[0],
        initial: true
    },
    reducers:{
        loadReviews(state, action){
            return{
                ...state,
                reviews: action.payload,
                review: action.payload[0],
                initial: false
            }
        },
        surpriseMe(state, action){
            state.review = state.reviews[action.payload]
        },
        nextReview(state, action){
            state.review = state.reviews[action.payload]
        },
        previousReview(state, action){
            state.review = state.reviews[action.payload]
        },
        createReview(state, action){
            // For Firebase
            // state.initial = true
            
            // For Local
            state.reviews = state.reviews.concat(action.payload)
        }
    }
})

export const reviewSliceActions = reviewSlice.actions

export default reviewSlice.reducer