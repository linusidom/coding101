import useInput from '../Hooks/useInput';

export default function FormComponent(){

    // For Form Validation, I don't recommend using useRef
    // useRef is great when no active validation is needed
    // useRef has the advantage of not re-rendering the page
    // const enteredName = useRef()

    // const [enteredName, setEnteredName] = useState('')
    // const [enteredNameBlurIsValid, setEnteredNameBlurIsValid] = useState(false)
    
    
    // // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)
    // // const [formIsValid, setFormIsValid] = useState(false)

    // // useEffect(() => {
    // //     if(enteredNameIsValid){
    // //         setFormIsValid(true)
    // //     }
    // // }, [enteredNameIsValid])

    // const enteredNameIsValid = enteredName.trim() !== ''

    // let formIsValid = false
    // if(enteredNameIsValid){
    //     formIsValid = true
    // }

    // function onNameChangeHandler(e){
    //     // console.log(e.target.value)

    //     // User has entered the field and may not have come out yet
    //     setEnteredName(e.target.value)

    //     setEnteredNameBlurIsValid(true)

    //     // Error Checking Actively
    //     // if(e.target.value.trim() !== ''){
    //     //     // Set Validated Name??
    //     //     setEnteredNameIsValid(true)
    //     //     // setFormIsValid(true)
    //     // }
    //     // else{
    //     //     setEnteredNameIsValid(false)
    //     //     // setFormIsValid(false)
    //     // }
    // }

    // function onNameBlurHandler(){
    //     // console.log('User went into this field and came back out')
    //     // User went into the field and came out for sure
    //     setEnteredNameBlurIsValid(true)
    // }

    // Name
    const {
        enteredValue:enteredName,
        enteredValueIsValid:enteredNameIsValid,
        inputValueError:inputNameError,
        onValueChangeHandler:onNameChangeHandler,
        onValueBlurHandler:onNameBlurHandler,
        resetValue:resetName,
    } = useInput(value => value.trim() !== '')

    // Email
    const {
        enteredValue:enteredEmail,
        enteredValueIsValid:enteredEmailIsValid,
        inputValueError:inputEmailError,
        onValueChangeHandler:onEmailChangeHandler,
        onValueBlurHandler:onEmailBlurHandler,
        resetValue:resetEmail,
    } = useInput(value => value.includes('@'))

    // Age
    const {
        enteredValue:enteredAge,
        enteredValueIsValid:enteredAgeIsValid,
        inputValueError:inputAgeError,
        onValueChangeHandler:onAgeChangeHandler,
        onValueBlurHandler:onAgeBlurHandler,
        resetValue:resetAge,
    } = useInput(value => value >= 21)


    const formIsValid = enteredNameIsValid && enteredEmailIsValid && enteredAgeIsValid

    function onSubmitHandler(e){
        e.preventDefault()
        // console.log('form is submitted')
        if(!enteredNameIsValid && enteredEmailIsValid && enteredAgeIsValid){

            // console.log('name is valid')
            // console.log(enteredName)
            return;
        }
        
        // Cleanup
        resetName()
        resetEmail()
        resetAge()
        
        // setEnteredName('')
        // setEnteredNameBlurIsValid(false)
        // setEnteredNameIsValid(false)
        // setFormIsValid(false)

        
    }

    // const inputNameError = !enteredNameIsValid && enteredNameBlurIsValid
    // console.log(inputNameError)
    const errorNameClassName = inputNameError ? 'inputField invalid' : 'inputField'
    const errorEmailClassName = inputEmailError ? 'inputField invalid' : 'inputField'
    const errorAgeClassName = inputAgeError ? 'inputField invalid' : 'inputField'


    return(
    <div className='card'>
        <h1>Welcome to Forms, Validation and Custom Hooks</h1>
        <form onSubmit={(e) => onSubmitHandler(e)}>
            {/* Name Field */}
            <div className='formControl'>
                <label className='labelField'>Name</label>
                <input className={errorNameClassName} type='text' value={enteredName} onChange={(e) => onNameChangeHandler(e)} onBlur={onNameBlurHandler}/>
            </div>
            {inputNameError && <p>Please enter a Valid Name</p>}
        
            {/* Email Field */}
            <div className='formControl'>
                <label className='labelField'>Email</label>
                <input className={errorEmailClassName} type='text' value={enteredEmail} onChange={(e) => onEmailChangeHandler(e)} onBlur={onEmailBlurHandler}/>
            </div>
            {inputEmailError && <p>Please enter a Valid Email Address</p>}

            {/* Age Field */}
            <div className='formControl'>
                <label className='labelField'>Age</label>
                <input className={errorAgeClassName} type='number' value={enteredAge} onChange={(e) => onAgeChangeHandler(e)} onBlur={onAgeBlurHandler}/>
            </div>
            {inputAgeError && <p>Must be over 21 to Enter</p>}
            {/* Submit Button */}
            <button className='button' type='submit' disabled={!formIsValid}>Submit</button>
        </form>
    </div>
    )
}