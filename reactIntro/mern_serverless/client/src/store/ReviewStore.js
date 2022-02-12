import { createSlice } from "@reduxjs/toolkit";
import { alertSliceActions } from "./AlertStore";



export const reviewCreateView = (reviewObj) => async (dispatch) => {
    let res = await fetch('/restaurant/review',{
        method:'POST',
        headers:{
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(reviewObj)
    })

    let data = await res.json()

    if(data.error) {
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        dispatch(reviewSliceActions.reviewCreate(data))
    }
}


export const reviewUpdateView = (reviewObj) => async (dispatch) => {
    let res = await fetch('/restaurant/review',{
        method:'PUT',
        headers:{
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(reviewObj)
    })

    let data = await res.json()

    if(data.error) {
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        dispatch(reviewSliceActions.reviewUpdate(data))
    }
}

export const reviewDeleteView = (reviewObj) => async (dispatch) => {
    let res = await fetch('/restaurant/review',{method:'DELETE'})

    let data = await res.json()

    if(data.error) {
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        dispatch(reviewSliceActions.reviewCreate(reviewObj.reviewID))
    }
}

const reviewSlice = createSlice({
    name: 'review',
    initialState:{
        review: {},
        reviews: []
    },
    reducers: {
        reviewCreate(state, action){
            return{
                ...state,
                reviews: [action.payload].concat(state.reviews),
                review: action.payload
            }
        },
        reviewUpdate(state, action){
            
            const updatedReview = state.reviews.map(review => review._id === action.payload._id ? {...review, ...action.payload} : {...review})

            return{
                ...state,
                reviews: updatedReview,
                review: action.payload
            }
        },
        reviewDelete(state, action){
            
            const updatedReview = state.review.filter(review => review._id !== action.payload)
            
            return{
                ...state,
                reviews: updatedReview
                
            }
        },
        
    }
})


export const reviewSliceActions = reviewSlice.actions
export default reviewSlice.reducer