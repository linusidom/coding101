import { useState } from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export const CreatePost = () => {

    const [title, setTitle] = useState('')

    const history = useHistory()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        fetch('/posts', {
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body: JSON.stringify({title})
        })
        .then(res => res.json())
        .then(data => {
            history.push('/posts')
        })
    }

    return (
        <Card className='shadow p-3'>
            <h1>Create Post Form</h1>
            <Form onSubmit={onSubmitHandler}>
                <Form.Control className='my-3' type='text' placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <Button variant='info' type='submit'>Create Post</Button>
            </Form>
        </Card>
    )
}