import { createSlice } from "@reduxjs/toolkit";
import data from '../data'


const itemSlice = createSlice({
    name: 'item',
    initialState:{
        items: data
    },
    reducers:{
        loadItems(state, action){
            state.items = data
        },
        clearItems(state, action){
            state.items = []
        },
        deleteItems(state, action){
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
    }
})

export const itemSliceAction = itemSlice.actions

export default itemSlice.reducer