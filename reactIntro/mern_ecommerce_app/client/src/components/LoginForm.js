import { useState } from "react"
import { Card, Form, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { alertSliceActions } from "../store/AlertStore"
import { userLoginView } from "../store/UserStore"
import { AlertComponent } from "./AlertComponent"
import {Link, useSearchParams} from 'react-router-dom'

export const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [searchParams, setSearchParams] = useSearchParams();
    
    const next = searchParams.get('next') || '/profile'

    const dispatch = useDispatch()

    const nav = useNavigate()

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if(email !== '' && password !== ''){
                           
            const userObj = {email, password}
            const result = await dispatch(userLoginView(userObj))
            if(result){
                nav(next)
            }

        } else {
            dispatch(alertSliceActions.showAlert({message:'All Fields must be populated', variant:'danger'}))
        }
    }

    return(
        <Card>
            <h3 className='mb-3'>Login Form</h3>
            <AlertComponent/>
            <Form onSubmit={onSubmitHandler}>
                <Form.Control className='mb-3' type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Form.Control className='mb-3' type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button type='submit'>Login</Button>
            </Form>
            <Link to='/passwordResetRequest'>Forgot Password</Link>
        </Card>
    )
}