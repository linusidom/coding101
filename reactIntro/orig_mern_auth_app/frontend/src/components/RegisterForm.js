import { useState } from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {alertSliceActions} from '../store/AlertStore'
import {AlertComponent} from '../components/AlertComponent'
import { userRegisterView } from '../store/UserStore'
import { Link, useHistory } from 'react-router-dom'

export const RegisterForm = () => {
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        if(username !== '' && email !== '' && password !== '' && confirmPassword !== ''){
            if(password === confirmPassword){

                const userObj = {username, email, password}
                try {
                    
                    const result = await dispatch(userRegisterView(userObj))
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
            <h3>Register Form</h3>
            <AlertComponent/>
            <Form onSubmit={onSubmitHandler}>
                <Form.Label>Username</Form.Label>
                <Form.Control className='mb-3' type='text' placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <Form.Label>Email</Form.Label>
                <Form.Control className='mb-3' type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Form.Label>Password</Form.Label>
                <Form.Control className='mb-3' type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control className='mb-3' type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <Button type='submit'>Register</Button>
            </Form>
            <Link to='/login'>Already have an account...Login</Link>
        </Card>
    )
}