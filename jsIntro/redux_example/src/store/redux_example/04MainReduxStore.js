// import { createStore } from 'redux'

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object.  It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */

// const initialState = {
//     counter: 0,
// }

// function counterReducer(state = initialState, action) {
//     if(action.type === 'increment'){
//         return {
//             counter: state.counter + 1,
            
//         }
//     }
//     if(action.type === 'decrement'){
//         return {
//             counter: state.counter - 1,
//         }
//     }
//     return state
// }

// // Create a Redux store holding the state of your app.
// // Its API is { subscribe, dispatch, getState }.
// const store = createStore(counterReducer)

// export default store

import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './04CounterReduxStore'
import toggleReducer from './04ToggleReduxStore'

const store = configureStore({
  reducer: {
    counter:counterReducer,
    toggle:toggleReducer
    }
})

export default store

