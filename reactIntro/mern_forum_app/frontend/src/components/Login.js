import { useState } from "react"
import { Card, Form, Button } from "react-bootstrap"
import {useDispatch} from 'react-redux'
import {alertSliceActions} from '../store/AlertStore'
import { userLoginView } from "../store/UserStore"
import { useNavigate } from "react-router-dom"

import {AlertComponent} from './AlertComponent'
export const Login = () => {
    
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if(email !== '' && password !== ''){
           
            const userObj = {password, email}
            const result = await dispatch(userLoginView(userObj))
            if(result){
                navigate('/profile')
            }
        } else {
            dispatch(alertSliceActions.showAlert({message:'All Fields must be filled in', variant:'danger'}))
        }
    }
    
    return(
        <div>
            
            <Card>
                <h1>Login</h1>
                <AlertComponent/>
                <Form onSubmit={onSubmitHandler}>
                    
                    <Form.Control className='my-3' type='email' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <Form.Control className='my-3' type='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    
                    <Button variant='outline-primary' type='submit'>Login</Button>
                </Form>
            </Card>
        </div>
    )
}