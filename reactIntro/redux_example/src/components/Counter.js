// import {useContext, useReducer, useState} from 'react'

// import { CounterContext } from '../store/03CounterContextStore'


import { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../store/redux_example/04CounterReduxStore'
import { toggleActions } from '../store/redux_example/04ToggleReduxStore'

// const initialState = {
//     counter: 0
// }

// const reducer = (state, action) => {
//     if(action.type === 'increment'){
//         return {
//             counter: state.counter + 1
//         }
//     }
//     if(action.type === 'decrement'){
//         return {
//             counter: state.counter - 1
//         }
//     }
// }

export default function Counter(){


    // 01 and 02 - can only be used inside a component, not outside
    // 01 - useState
    // const [counter, setCounter] = useState(0)

    // function increment(){
    //     setCounter(prevCounter => prevCounter + 1)
    // }

    // function decrement(){
    //     setCounter(prevCounter => prevCounter - 1)
    // }
    
    // 02 - useReducer
    // const [state, dispatch] = useReducer(reducer, initialState)

    // function increment(){
    //     dispatch({type:'increment'})
    // }

    // function decrement(){
    //     dispatch({type:'decrement'})
    // }

    // 03 - useContext - introduce toggle button and how to separate
    // const counterCtx = useContext(CounterContext)


    // 04 - redux - introduce toggle button and how to separate

    // const [state, dispatch] = useReducer(reducer, initialState)

    // for react-redux
    const counter = useSelector(state => state.counter.counter)
    const showCounter = useSelector(state => state.toggle.showCounter)

    const dispatch = useDispatch()

    function increment(){
        dispatch(counterActions.increment(10))
    }

    function decrement(){
        dispatch(counterActions.decrement(10))
    }

    function toggleHandler(){
        dispatch(toggleActions.toggleHandler())
    }


    return(
        <div className='card'>
            <h1>Counter</h1>
            
            {/* This is for useState */}
            {/* <h3>Counter Value {counter}</h3> */}

            {/* This is for useReducer */}
            {/* <h3>Counter Value {state.counter}</h3> */}

            {/* This is for useContext */}
            {showCounter && <h3>Counter Value {counter}</h3>}

            <div className='buttonGrid'>
                <button className='button' onClick={increment}>Increment</button>
                <button className='button' onClick={decrement}>Decrement</button>
            </div>
            <button className='button toggle' onClick={toggleHandler}>Toggle Button</button>
        </div>
    )
}