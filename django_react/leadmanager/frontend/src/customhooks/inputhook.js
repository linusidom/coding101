import React, { useState } from 'react'

const useInput = (validateFunction) => {

    const [value, setValue] = useState('')
    const [blur, setBlur] = useState(false)

    const valueValid = validateFunction(value) && blur

    const onValueChangeHandler = (e) => {
        setValue(e.target.value)
    }

    const onValueBlurHandler = () => {
        setBlur(true)
    }

    const resetValue = () => {
        setValue('')
        setBlur(false)
    }

    return{
        value,
        valueValid,
        onValueChangeHandler,
        onValueBlurHandler,
        resetValue
    }

}

export default useInput