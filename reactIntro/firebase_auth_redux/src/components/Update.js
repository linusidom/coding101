import { useRef, useState } from "react"
import { Card } from "../UI/Card"
import { Button } from "../UI/Button"
import { Alert } from "./Alert"
import { useDispatch } from "react-redux"
import { alertSliceActions } from "../store/AlertStore"
import { Link } from "react-router-dom"
import { userUpdateEmail, userUpdatePassword } from "../store/AuthStore"



export const Update = () => {
    
    const dispatch = useDispatch()

    const [loadingButton, setLoadingButton] = useState(false)

    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    
    const onSubmitHandler = (e) => {
        e.preventDefault()

        const promises = []

        if(passwordRef.current.value !== '' || confirmPasswordRef.current.value !== ''){
            if(passwordRef.current.value === confirmPasswordRef.current.value){

                promises.push(dispatch(userUpdatePassword(passwordRef.current.value)))                    

            }
            else{
                dispatch(alertSliceActions.showAlert({message:'Passwords must match', variant:'danger'}))
            }
        }


        if(emailRef.current.value !== ''){
            // Add Another promise here
            promises.push(dispatch(userUpdateEmail(emailRef.current.value)))

        }

        if(promises.length > 0){
            setLoadingButton(true)
            Promise.all(promises)
            .then(res => {
                dispatch(alertSliceActions.showAlert({message:'Account updated Successfully', variant:'success'}))
            })
            .catch(err => {
                dispatch(alertSliceActions.showAlert({message:err.message,variant:'danger'}))
            })
        }


        setLoadingButton(false)
    }
    
    return(
        <Card>
            <h1>Update</h1>
            <Alert/>

            {/* email, password, confirmpassword */}
            <form onSubmit={onSubmitHandler}>
                <input className='inputField' type='email' placeholder='Enter Email' ref={emailRef}/>
                <input className='inputField' type='password' placeholder='Enter Password' ref={passwordRef}/>
                <input className='inputField' type='password' placeholder='Enter Confirm Password' ref={confirmPasswordRef}/>
                <Button type='submit' disabled={loadingButton}>Update</Button>
            </form>
            <p>I changed my mind...<Link to='/dashboard'>take me back</Link></p>


        </Card>
    )
}