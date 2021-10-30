import { useState } from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {alertSliceActions} from '../store/AlertStore'
import {AlertComponent} from '../components/AlertComponent'
import { useHistory } from 'react-router-dom'
import { userLoginView } from '../store/UserStore'
import { Link } from 'react-router-dom'
export const LoginForm = () => {
    
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        if(email !== '' && password !== ''){
            
            const userObj = {email, password}
            try {
                
                const result = await dispatch(userLoginView(userObj))
                if(result){
                    history.push('/profile')
                }
            } catch (error) {
                dispatch(alertSliceActions.showAlert({message:error.message, variant:'danger'}))
            }

        } else {
            dispatch(alertSliceActions.showAlert({message:'Fields Must Be filled in', variant:'danger'}))
        }
    }

    return(
        <Card>
            <h3>Login Form</h3>
            <AlertComponent/>
            <Form onSubmit={onSubmitHandler}>
                <Form.Label>Email</Form.Label>
                <Form.Control className='mb-3' type='email' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                <Form.Label>Password</Form.Label>
                <Form.Control className='mb-3' type='password' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                
                <Button type='submit'>Login</Button>
            </Form>
            <Link to='/register'>Don't have an account...Register</Link>
            <Link to='/passwordResetForm'>Forgot Password</Link>
        </Card>
    )
}