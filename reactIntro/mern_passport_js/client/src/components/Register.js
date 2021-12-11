import { useState } from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import {AlertComponent} from './AlertComponent'
import {useDispatch} from 'react-redux'
import { alertSliceActions } from '../store/AlertStore'
import { userRegisterView } from '../store/UserStore'

import {useNavigate} from 'react-router-dom'

export const Register = () => {
    
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ confirmPassword, setConfirmPassword] = useState('')
     
    const dispatch = useDispatch()

    const nav = useNavigate()

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        if(username !== '' && password !== '' && confirmPassword !== ''){

            if(password === confirmPassword){
                console.log('Call Redux Fetch Call')

                const userObj = {username, password}

                const result = await dispatch(userRegisterView(userObj))
                if(result){
                    nav('/login')
                }
            } else {
                dispatch(alertSliceActions.showAlert({message:'Passwords Must Match', variant:'danger'}))    
            }

        } else {
            dispatch(alertSliceActions.showAlert({message:'Fields must be filled in', variant:'danger'}))
        }

    }

    return(
        <Card>
            Register
            <AlertComponent/>
            <Form onSubmit={onSubmitHandler}>
                <Form.Control className='my-3' type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <Form.Control className='my-3' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Form.Control className='my-3' type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <Button type='submit' variant='outline-primary'>Register</Button>
            </Form>
        
        </Card>
    )
}