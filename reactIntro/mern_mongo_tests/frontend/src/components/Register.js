import { useState } from 'react'
import {Form, Button, Card} from 'react-bootstrap'

export const Register = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log('Submit')
    }

    return (
        <Card className='shadow p-3'>
            <h1>Register Form</h1>
            <Form onSubmit={onSubmitHandler}>
                <Form.Control className='my-3' type='text' placeholder='Enter Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                <Form.Control className='my-3' type='text' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <Form.Control className='my-3' type='text' placeholder='ConfirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <Button variant='info' type='submit'>Register</Button>
            </Form>
        </Card>


    )
}