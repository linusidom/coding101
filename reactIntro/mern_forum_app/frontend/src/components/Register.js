import { useState } from "react"
import { Card, Form, Button } from "react-bootstrap"
import {useDispatch} from 'react-redux'
import {alertSliceActions} from '../store/AlertStore'
import { userRegisterView } from "../store/UserStore"
import {AlertComponent} from './AlertComponent'
import {useNavigate} from 'react-router-dom'


export const Register = () => {
    
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    const dispatch = useDispatch()

    const navigate = useNavigate()

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if(username !== '' && email !== '' && password !== '' && confirmPassword !== ''){
            if(password === confirmPassword){
                const userObj = {username, password, email}
                const result = await dispatch(userRegisterView(userObj))
                if(result){
                    navigate('/login')
                }

            } else {
                dispatch(alertSliceActions.showAlert({message:'Password Must Match', variant:'danger'}))    
            }
        } else {
            dispatch(alertSliceActions.showAlert({message:'All Fields must be filled in', variant:'danger'}))
        }
    }
    
    return(
        <div>
            
            <Card>
                <h1>Register</h1>
                <AlertComponent/>
                <Form onSubmit={onSubmitHandler}>
                    <Form.Control className='my-3' type='text' placeholder='Enter Username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    <Form.Control className='my-3' type='email' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <Form.Control className='my-3' type='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <Form.Control className='my-3' type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    <Button variant='outline-primary' type='submit'>Register</Button>
                </Form>
            </Card>
        </div>
    )
}