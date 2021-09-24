import { useState } from "react"
import {Card, Form, InputGroup, Button, FormControl, Row, Col} from 'react-bootstrap'



export const Post = ({post, postDeleteHandler, updatePosts}) => {

    const [updating, setUpdating] = useState(false)

    const [title, setTitle] = useState('')


    const updateHandler = (postObj) => {
        console.log('updateHandler')
        setUpdating(true)
        setTitle(postObj.title)
      }
    
    const postUpdateHandler = (postID) => {
        console.log('post Update Handler')
        setUpdating(false)

        fetch(`/posts/${postID}`,{
            method: 'PUT',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify({title})
        })
        .then(res => res.json())
        .then(data => {
            
            updatePosts(data)
            setUpdating(false)
        })

    }

    return (
        <Card className='my-3 p-3'>
        <Row>
            <Col>
            {!updating ? <p>{post.title}</p> :
            
            <Form onSubmit={() => postUpdateHandler(post._id)}>
                <InputGroup>
                <FormControl type='text' placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <Button type='submit'>Update</Button>
                </InputGroup>
            </Form>
            }

            </Col>
            <Col>
                <Button variant='info' onClick={() => updateHandler(post)}>Update</Button>
                <Button variant='danger' onClick={() => postDeleteHandler(post._id)}>Delete</Button>
            </Col>

        </Row>
        
        </Card>
        )

}