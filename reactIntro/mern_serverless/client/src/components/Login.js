import { AlertComponent } from "./AlertComponent"
import {Form, Button} from 'react-bootstrap'
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userSliceActions } from "../store/UserStore"

export const Login = () => {
    
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const user = useSelector(state => state.user.user)

    const dispatch = useDispatch()

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        if(username !== '' && password !== ''){
            const userObj = {username, _id: '1234'}
            dispatch(userSliceActions.userLogin(userObj))
        }
    }

    return(
        <div className="card">
            <h3>Login</h3>
            <AlertComponent/>
            <Form onSubmit={onSubmitHandler}>
                <Form.Control className='my-4' type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
                <Form.Control className='my-4' type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button type='submit' variant='outline-primary'>Login</Button>
            </Form>
        </div>
    )
}