import { createContext, useReducer } from "react";



const initialState = {
    showCounter:false
}

const reducer = (state, action) => {

    if(action.type === 'toggleHandler'){
        return {
            showCounter:!state.showCounter,
            counter: state.counter,
        }
    }
}


// This is the value we will import into our Components
export const ToggleContext = createContext({})



// This is the function that will in our index.js
// This will be our Listener for variables
// Global State Manager/Provider
export default function ToggleContextProvider(props){

    const [state, dispatch] = useReducer(reducer, initialState)


    function toggleHandler(){
        dispatch({type:'toggleHandler'})
    }


    const context = {
        showCounter:state.showCounter,
        toggleHandler,
    }

    return(
        <ToggleContext.Provider value={context}>
            {props.children}
        </ToggleContext.Provider>
    )
}