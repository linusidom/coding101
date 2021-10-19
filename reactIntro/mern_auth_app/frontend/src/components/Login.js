import { useState } from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import { alertSliceActions } from '../store/AlertStore'
import { userLoginView } from '../store/UserStore'
import { AlertComponent } from './AlertComponent'


export const LoginForm = () => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        if(username !== '' && password !== ''){
            
            const userObj = {username, password}
            
            try {
                await dispatch(userLoginView(userObj))
                
                history.push('/posts')

            } catch (error) {
                dispatch(alertSliceActions.showAlert({message:error.message, variant:'danger'}))    
            }

        } else {
            dispatch(alertSliceActions.showAlert({message:'Please fill in all Fields', variant:'danger'}))
        }
    }

    return(
        <Card>
            <AlertComponent/>
            <Form onSubmit={onSubmitHandler}>
                <Form.Control type='text' placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <Form.Control type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Button type='submit'>Login</Button>
            </Form>
        </Card>
    )
}