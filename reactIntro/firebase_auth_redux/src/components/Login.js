import { useRef, useState } from "react"
import { Card } from "../UI/Card"
import { Button } from "../UI/Button"
import { Alert } from "./Alert"
import { useDispatch } from "react-redux"
import { alertSliceActions } from "../store/AlertStore"
import { Link, useHistory } from "react-router-dom"
import { userLogin } from "../store/AuthStore"



export const Login = () => {
    

    const history = useHistory()

    const dispatch = useDispatch()


    const [loadingButton, setLoadingButton] = useState(false)

    const emailRef = useRef()
    const passwordRef = useRef()
    
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if(emailRef.current.value !== '' && passwordRef.current.value !== ''){
            
                
            try {

                setLoadingButton(true)
                // This is where I want to call Firebase!! - We'll fix this in the future
                // Register with firebase inside this module but then move to redux
                
                // We need a waty to wait for this response before going to the dashboard
                // await auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)

                await dispatch(userLogin(emailRef.current.value, passwordRef.current.value))
                return history.push('/dashboard')

            } catch (error){
                dispatch(alertSliceActions.showAlert({message:error.message, variant:'danger'}))
            }
        }
        else{
            dispatch(alertSliceActions.showAlert({message:'All Fields must be filled in', variant:'danger'}))
        }
        setLoadingButton(false)
    }
    
    return(
        <Card>
            <h1>Login</h1>
            <Alert/>

            {/* email, password, confirmpassword */}
            <form onSubmit={onSubmitHandler}>
                <input className='inputField' type='email' placeholder='Enter Email' ref={emailRef}/>
                <input className='inputField' type='password' placeholder='Enter Password' ref={passwordRef}/>
                
                <Button type='submit' disabled={loadingButton}>Login</Button>
            </form>
            <p>Don't have an Account?...<Link to='/register'>Register</Link></p>
            <p>I forgot my password...<Link to='/forgot'>Reset</Link></p>


        </Card>
    )
}