import { useState } from 'react'
import {Form, Button, Card} from 'react-bootstrap'
import { useParams } from 'react-router-dom'

export const CreateComment = ({post}) => {

    const [comment, setComment] = useState('')

    const {id} = useParams()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        console.log(post)
        if(comment !== ''){
            fetch(`/posts/comment/${id}`,{
                method: 'PUT',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify({comment})
            })
            .then(res => res.json())
            .then(data => console.log(data))
        }

        

    }

    return (
        <Card className='shadow p-3'>
            <h1>Create Comment Form</h1>
            <Form onSubmit={onSubmitHandler}>
                <Form.Control className='my-3' type='text' placeholder='Enter Comment' value={comment} onChange={(e) => setComment(e.target.value)}/>
                <Button variant='info' type='submit'>Create Comment</Button>
            </Form>
        </Card>
    )
}