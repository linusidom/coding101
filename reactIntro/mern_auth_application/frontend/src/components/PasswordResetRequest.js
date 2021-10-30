import { useState } from "react"
import { Card, Form, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { alertSliceActions } from "../store/AlertStore"
import { AlertComponent } from "./AlertComponent"
import  {Link} from 'react-router-dom'
import { userPasswordResetRequestView } from "../store/UserStore"

export const PasswordResetRequest = () => {

    const [email, setEmail] = useState('')
    
    
    const dispatch = useDispatch()

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if(email !== ''){
                           
            const emailObj = {email}

            await dispatch(userPasswordResetRequestView(emailObj))
        } else {
            dispatch(alertSliceActions.showAlert({message:'All Fields must be populated', variant:'danger'}))
        }
    }

    return(
        <Card>
            <h3 className='mb-3'>Password Reset Request</h3>
            <AlertComponent/>
            <Form onSubmit={onSubmitHandler}>
                <Form.Control className='mb-3' type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Button type='submit'>Send me Instructions to Reset My Password</Button>
            </Form>
            <Link to='/login'>I remember my password</Link>
        </Card>
    )
}

// Send the user an email with link and a token that has the users ID???