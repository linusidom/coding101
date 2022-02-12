import { createSlice } from "@reduxjs/toolkit";
import { alertSliceActions } from "./AlertStore";


export const restaurantListView = (page=0) => async (dispatch) => {
    
    let res = await fetch(`/restaurant?page=${page}`)

    let data = await res.json()

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        dispatch(restaurantSliceActions.restaurantList(data))
        return true
    }
}


export const restaurantSearchView = (query, by, page=0) => async (dispatch) => {
    
    console.log(query, by)
    let res = await fetch(`/restaurant?${by}=${query}&page=${page}`)

    let data = await res.json()

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        dispatch(restaurantSliceActions.restaurantList(data))
        return true
    }
}

export const restaurantDetailView = (restID) => async (dispatch) => {
    let res = await fetch(`/restaurant/detail/${restID}`)

    let data = await res.json()

    console.log('Detail',data)

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        dispatch(restaurantSliceActions.restaurantDetail(data[0]))
        return true
    }
}



const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState:{
        restaurants: [],
        restaurant: {}
    },
    reducers: {
        restaurantList(state, action){
            return{
                ...state,
                restaurants: action.payload
            }
        },
        restaurantDetail(state, action){
            return{
                ...state,
                restaurant: action.payload
            }
        },
    }
})


export const restaurantSliceActions = restaurantSlice.actions
export default restaurantSlice.reducer