import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0
  },
  reducers: {
    increment: (state, action) => {
      state.counter += action.payload
    },
    decrement(state, action){
        console.log(action)
      state.counter -= action.payload
    }
  }
})

export const counterActions = counterSlice.actions

export default counterSlice.reducer