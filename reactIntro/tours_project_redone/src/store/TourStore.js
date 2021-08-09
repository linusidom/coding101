import {createSlice} from '@reduxjs/toolkit'
import { notificationSliceActions } from './NotificationStore'

const url = 'https://course-api.com/react-tours-project'


export const getToursFetchFunction = () => async (dispatch) => {

    dispatch(notificationSliceActions.isLoading(true))
    let response = await fetch(url)

    if(!response.ok){
        console.log('There was a problem')
        dispatch(notificationSliceActions.somethingWrong('There was a problem' + response.statusText))
    }

    let data = await response.json()

    dispatch(tourSlice.actions.loadTours(data))
    dispatch(notificationSliceActions.isLoading(false))
}


const tourSlice = createSlice({
    name:'tour',
    initialState:{
        tours:[],
        initial: true
    },
    reducers:{
        loadTours(state, action){
            // Using fetch inside of here is a big NO NO!!
            // This area should only update the state, no slowdown in updating the state
            
            // If we have a single update, we can use this as a method to update
            // state.tours = action.payload

            // if we have more than one, we need to change to:
            return {
                ...state,
                tours: action.payload,
                initial: false
            }

        },
        deleteTour(state, action){
            const updatedTours = state.tours.filter((tour) => tour.id !== action.payload)

            return {
                ...state,
                tours: updatedTours,
                initial: false
            }
        }
    }
})

export const tourSliceActions = tourSlice.actions

export default tourSlice.reducer