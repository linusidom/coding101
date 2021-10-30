import { useState } from "react"
import { Card, Form, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import {useParams, useHistory } from "react-router-dom"
import { alertSliceActions } from "../store/AlertStore"
import { userPasswordResetFormView } from "../store/UserStore"
import { AlertComponent } from "./AlertComponent"

export const PasswordResetForm = () => {

    
    const {token} = useParams()

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch()

    const history = useHistory()

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if(password !== '' && confirmPassword !== ''){
            if(password === confirmPassword) {
                
                const passwordObj = {password, token}
                const result = await dispatch(userPasswordResetFormView(passwordObj))
                if(result){
                    history.push('/login')
                }
            

            } else {
                dispatch(alertSliceActions.showAlert({message:'Passwords must Match', variant:'danger'}))    
            }
        } else {
            dispatch(alertSliceActions.showAlert({message:'All Fields must be populated', variant:'danger'}))
        }
    }

    return(
        <Card>
            <h3 className='mb-3'>Password Reset Form</h3>
            <AlertComponent/>
            <Form onSubmit={onSubmitHandler}>
                <Form.Control className='mb-3' type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Form.Control className='mb-3' type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <Button type='submit'>Reset My Password</Button>
            </Form>
        </Card>
    )
}