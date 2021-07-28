import { createContext, useReducer } from "react";



const initialState = {
    counter: 0,
}

const reducer = (state, action) => {
    if(action.type === 'increment'){
        return {
            counter: state.counter + 1,
            showCounter:state.showCounter
        }
    }
    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1,
            showCounter:state.showCounter
        }
    }

}


// This is the value we will import into our Components
export const CounterContext = createContext({})



// This is the function that will in our index.js
// This will be our Listener for variables
// Global State Manager/Provider
export default function CounterContextProvider(props){

    const [state, dispatch] = useReducer(reducer, initialState)

    function increment(){
        dispatch({type:'increment'})
    }

    function decrement(){
        dispatch({type:'decrement'})
    }

    const context = {
        counter: state.counter,
        increment,
        decrement,
     
    }

    return(
        <CounterContext.Provider value={context}>
            {props.children}
        </CounterContext.Provider>
    )
}