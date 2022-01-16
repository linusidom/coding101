import { useState } from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { alertSliceActions } from '../store/AlertStore'
import { AlertComponent } from './AlertComponent'
import {userLoginView} from '../store/UserStore'
import {useNavigate} from 'react-router-dom'

export const Login = () => {
    

    const [username, setUsername] = useState('')
    
    const [password, setPassword] = useState('')
    

    const nav = useNavigate()

    const dispatch = useDispatch()

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        if(username !== '' && password !== ''){
            
            const userObj = {username, password}

            const result = await dispatch(userLoginView(userObj))
            if(result){
                nav('/profile')
            }
        

        } else {
            dispatch(alertSliceActions.showAlert({message:'All Fields must be filled in', variant:'danger'}))
        }

    }
    return(
        <Card>
            <h3>Login</h3>
            <AlertComponent/>
            <Form onSubmit={onSubmitHandler}>
                <Form.Control className='my-3' type='text' placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <Form.Control className='my-3' type='password' placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button type='submit'>Login</Button>
            </Form>
        </Card>
    )
}