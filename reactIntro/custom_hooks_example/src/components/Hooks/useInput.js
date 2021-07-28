import { useState } from "react"


const useInput = (validationMethod) => {

    const [enteredValue, setEnteredValue] = useState('')
    const [enteredValueBlurIsValid, setEnteredValueBlurIsValid] = useState(false)

    // Validation method???
    // const enteredValueIsValid = enteredValue.trim() !== ''
    const enteredValueIsValid = validationMethod(enteredValue)

    const inputValueError = !enteredValueIsValid && enteredValueBlurIsValid

    // const formIsValid = enteredValueIsValid 
    

    function onValueChangeHandler(e){
        setEnteredValue(e.target.value)
        setEnteredValueBlurIsValid(true)
    }

    function onValueBlurHandler(){
        setEnteredValueBlurIsValid(true)
    }

    function resetValue(){
        setEnteredValue('')
        setEnteredValueBlurIsValid(false)
    }

    return {
        enteredValue,
        enteredValueBlurIsValid,
        enteredValueIsValid,
        inputValueError,
        onValueChangeHandler,
        onValueBlurHandler,
        resetValue,
    }
}

export default useInput

// useState
// useRef
// useReducer
// useEffect
// useContext