import { useState } from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { userRegisterView } from '../store/UserStore'
import { AlertComponent } from './AlertComponent'
import { alertSliceActions } from '../store/AlertStore'
import { useHistory } from 'react-router-dom'


export const RegisterForm = () => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    
    const dispatch = useDispatch()
    const history = useHistory()


    const onSubmitHandler = async (e) => {
        e.preventDefault()

        if(username !== '' && password !== '' && confirmPassword !== ''){
            if(password === confirmPassword){

                const userObj = {username, password}

                try {
                    await dispatch(userRegisterView(userObj))
                    
                    history.pushState('/posts')

                } catch (error) {
                    dispatch(alertSliceActions.showAlert({message:error.message, variant:'danger'}))    
                }
                
            } else {
                dispatch(alertSliceActions.showAlert({message:'Passwords Must Match', variant:'danger'}))    
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
                <Form.Control type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <Button type='submit'>Register</Button>
            </Form>
        </Card>
    )
}