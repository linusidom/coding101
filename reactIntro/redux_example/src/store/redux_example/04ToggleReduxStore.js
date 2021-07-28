import { createSlice } from '@reduxjs/toolkit'

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    showCounter: false
  },
  reducers: {
    toggleHandler: state => {
      state.showCounter = !state.showCounter
    }
  }
})

export const toggleActions = toggleSlice.actions

export default toggleSlice.reducer