import { combineReducers, createStore } from "redux";
import leadReducer from './LeadReducer'
import { configureStore } from '@reduxjs/toolkit'

  
const store = configureStore({
    reducer: {
        lead: leadReducer.reducer
    }
})

// const store = configureStore({
//     reducer: {
//     //   counter:counterReducer,
//     //   toggle:toggleReducer
//       lead: leadReducer.reducer
//       }
//   })

export default store