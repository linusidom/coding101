import { useRef, useState } from "react"
import { Card } from "../UI/Card"
import { Button } from "../UI/Button"
import { Alert } from "./Alert"
import { useDispatch } from "react-redux"
import { alertSliceActions } from "../store/AlertStore"
import { Link, useHistory } from "react-router-dom"
import auth from "../firebaseConfig"
import { userRegister } from "../store/AuthStore"


export const Register = () => {
    
    const history = useHistory()

    const dispatch = useDispatch()


    const [loadingButton, setLoadingButton] = useState(false)

    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if(emailRef.current.value !== '' && passwordRef.current.value !== '' && confirmPasswordRef.current.value !== ''){
            if(passwordRef.current.value === confirmPasswordRef.current.value){
                                
                try {

                    setLoadingButton(true)
                    // This is where I want to call Firebase!! - We'll fix this in the future
                    // Register with firebase inside this module but then move to redux
                    
                    // We need a waty to wait for this response before going to the dashboard
                    // await auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)

                    await dispatch(userRegister(emailRef.current.value, passwordRef.current.value))
                    return history.push('/dashboard')

                } catch (error){
                    dispatch(alertSliceActions.showAlert({message:error.message, variant:'danger'}))
                }



            }
            else{
                dispatch(alertSliceActions.showAlert({message:'Passwords must match', variant:'info'}))

            }
        }
        else{
            dispatch(alertSliceActions.showAlert({message:'All Fields must be filled in', variant:'info'}))
        }
        setLoadingButton(false)
    }
    
    return(
        <Card>
            <h1>Register</h1>
            <Alert/>

            {/* email, password, confirmpassword */}
            <form onSubmit={onSubmitHandler}>
                <input className='inputField' type='email' placeholder='Enter Email' ref={emailRef}/>
                <input className='inputField' type='password' placeholder='Enter Password' ref={passwordRef}/>
                <input className='inputField' type='password' placeholder='Enter Confirm Password' ref={confirmPasswordRef}/>
                <Button type='submit' disabled={loadingButton}>Register</Button>
            </form>
            <p>Have an Account?...<Link to='/login'>Login</Link></p>


        </Card>
    )
}