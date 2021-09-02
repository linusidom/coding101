import { useRef, useState } from "react"
import { Card } from "../UI/Card"
import { Button } from "../UI/Button"
import { Alert } from "./Alert"
import { useDispatch } from "react-redux"
import { alertSliceActions } from "../store/AlertStore"
import { Link } from "react-router-dom"
import { userPasswordReset } from "../store/AuthStore"



export const Forgot = () => {
    


    const dispatch = useDispatch()


    const [loadingButton, setLoadingButton] = useState(false)

    const emailRef = useRef()
    const passwordRef = useRef()
    
    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if(emailRef.current.value !== ''){
            
            try {

                setLoadingButton(true)
                // This is where I want to call Firebase!! - We'll fix this in the future
                // Register with firebase inside this module but then move to redux
                
                // We need a waty to wait for this response before going to the dashboard
                // await auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)

                await dispatch(userPasswordReset(emailRef.current.value))
                dispatch(alertSliceActions.showAlert({message:'Please check your inbox for details', variant:'info'}))

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
            <h1>Passowrd Reset</h1>
            <Alert/>

            {/* email, password, confirmpassword */}
            <form onSubmit={onSubmitHandler}>
                <input className='inputField' type='email' placeholder='Enter Email' ref={emailRef}/>                
                <Button type='submit' disabled={loadingButton}>Reset</Button>
            </form>
            <p>I remember my password...<Link to='/login'>Login</Link></p>
            


        </Card>
    )
}