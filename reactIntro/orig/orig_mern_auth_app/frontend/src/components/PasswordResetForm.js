import { useState } from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {alertSliceActions} from '../store/AlertStore'
import {AlertComponent} from './AlertComponent'
import { Link } from 'react-router-dom'
import { userPasswordResetForm } from '../store/UserStore'

export const PasswordResetForm = () => {
    
    
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        if(email !== ''){
            
            const emailObj = {email}
            try {

                await dispatch(userPasswordResetForm(emailObj))
            } catch (error) {
                dispatch(alertSliceActions.showAlert({message:error.message, variant:'danger'}))
            }

        } else {
            dispatch(alertSliceActions.showAlert({message:'Fields Must Be filled in', variant:'danger'}))
        }
    }

    return(
        <Card>
            <h3>Forgot Password Form</h3>
            <AlertComponent/>
            <Form onSubmit={onSubmitHandler}>
                <Form.Label>Email</Form.Label>
                <Form.Control className='mb-3' type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Button type='submit'>Send Me Instructions to Reset My Password</Button>
            </Form>
            <Link to='/login'>Wait...I remember my Password...Login</Link>
            
        </Card>
    )
}