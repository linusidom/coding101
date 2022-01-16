import { useState } from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { alertSliceActions } from '../store/AlertStore'
import { AlertComponent } from './AlertComponent'
import {userRegisterView} from '../store/UserStore'
import {useNavigate} from 'react-router-dom'

export const Register = () => {
    

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const nav = useNavigate()

    const dispatch = useDispatch()

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        if(username !== '' && email !== '' && password !== '' && confirmPassword !== '' ){
            if(password === confirmPassword){
                // console.log('Call to the backend to register the user')

                const userObj = {username, email, password}

                const result = await dispatch(userRegisterView(userObj))
                if(result){
                    nav('/login')
                }
            } else {
                dispatch(alertSliceActions.showAlert({message:'Passwords Must Match', variant:'danger'}))    
            }

        } else {
            dispatch(alertSliceActions.showAlert({message:'All Fields must be filled in', variant:'danger'}))
        }

    }
    return(
        <Card>
            <h3>Register</h3>
            <AlertComponent/>
            <Form onSubmit={onSubmitHandler}>
                <Form.Control className='my-3' type='text' placeholder='Pick a username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <Form.Control className='my-3' type='email' placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <Form.Control className='my-3' type='password' placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <Form.Control className='my-3' type='password' placeholder='Confirm your Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                <Button type='submit'>Register</Button>
            </Form>
        </Card>
    )
}