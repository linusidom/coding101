import { createSlice } from "@reduxjs/toolkit";
  

const itemSlice = createSlice({
    name: 'item',
    initialState:{
        items:[{
            id: 1,
            name: 'Test Product',
            desc: 'Test Desc',
            price: 7.00
          }]
    },
    reducers:{
        getItems(state, action) {
            state.items = state.items
        }
    }
})


export const itemSliceActions = itemSlice.actions

export default itemSlice.reducer