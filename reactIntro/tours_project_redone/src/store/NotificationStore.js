import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState:{
        isLoading: true,
        somethingWrong:''
    },
    reducers:{
        isLoading(state, action){
            state.isLoading = action.payload
        },
        somethingWrong(state, action){
            state.somethingWrong = action.payload
        }
    }
})

export const notificationSliceActions = notificationSlice.actions

export default notificationSlice.reducer