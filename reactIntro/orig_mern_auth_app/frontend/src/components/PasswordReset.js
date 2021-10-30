import { useState } from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {alertSliceActions} from '../store/AlertStore'
import {AlertComponent} from './AlertComponent'
import { Link, useHistory, useParams } from 'react-router-dom'
import { userPasswordReset } from '../store/UserStore'

export const PasswordReset = () => {
    
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const {token} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        if(password !== '' && confirmPassword !== ''){
            if(password === confirmPassword){

                const passwordObj = {token, password}
                try {
                    
                    const result = await dispatch(userPasswordReset(passwordObj))
                    if(result) {
                        history.push('/login')
                    }
                } catch (error) {
                    dispatch(alertSliceActions.showAlert({message:error.message, variant:'danger'}))
                }

            } else {
                dispatch(alertSliceActions.showAlert({message:'Passwords Must Match', variant:'danger'}))
            }

        } else {
            dispatch(alertSliceActions.showAlert({message:'Fields Must Be filled in', variant:'danger'}))
        }
    }

    return(
        <Card>
            <h3>Password Reset Form</h3>
            <AlertComponent/>
            <Form onSubmit={onSubmitHandler}>
                <Form.Label>Password</Form.Label>
                <Form.Control className='mb-3' type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control className='mb-3' type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <Button type='submit'>Reset Password</Button>
            </Form>
            <Link to='/login'>Already have an account...Login</Link>
        </Card>
    )
}