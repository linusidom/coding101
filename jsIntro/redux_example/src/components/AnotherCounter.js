import { useSelector, useDispatch } from "react-redux"
import { counterActions } from "../store/redux_example/04CounterReduxStore"
import { toggleActions } from "../store/redux_example/04ToggleReduxStore"

export default function AnotherCounter(){

    const counter = useSelector(state => state.counter.counter)
    const showCounter = useSelector(state => state.toggle.showCounter)

    const dispatch = useDispatch()

    function increment(){
        dispatch(counterActions.increment())
    }

    function decrement(){
        dispatch(counterActions.decrement())
    }

    function toggleHandler(){
        dispatch(toggleActions.toggleHandler())
    }

    return(
        <div className='card'>
            <h1>Another Counter</h1>
            
            {/* Limitation of using State or useReducer */}
            {/* Cannot use these in other files */}
            {/* Can only use them locally... */}
            {/* What do we do? */}


            {/* This is for useState */}
            {/* <h3>Counter Value {counter}</h3> */}

            {/* This is for useReducer */}
            {showCounter && <h3>Counter Value {counter}</h3>}

            <div className='buttonGrid'>
                <button className='button' onClick={increment}>Increment</button>
                <button className='button' onClick={decrement}>Decrement</button>
            </div>
            <button className='button toggle' onClick={toggleHandler}>Toggle Button</button>
        </div>
    )
}