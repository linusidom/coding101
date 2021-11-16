import { useState } from "react"
import { Card, Form, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { alertSliceActions } from "../store/AlertStore"
import { postCreateView } from "../store/PostStore"
import { AlertComponent } from "./AlertComponent"
import {useHistory} from 'react-router-dom'

export const PostForm = () => {
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    
    
    const dispatch = useDispatch()

    const history = useHistory()

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if(title !== '' && content !== ''){
            
            const postObj = {title, content}
            const token = localStorage.getItem('token')
            const result = await dispatch(postCreateView(token, postObj))
            if(result){
                history.push('/posts')
            }
        } else {
            dispatch(alertSliceActions.showAlert({message:'All Fields must be filled in', variant:'danger'}))
        }
    }

    return(
        <Card>
            <h3>Post Form</h3>
            <AlertComponent/>
            <Form onSubmit={onSubmitHandler}>
                <Form.Control className='my-3' type='text' placeholder='Enter title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <Form.Control className='my-3' type='message' placeholder='Enter message' value={content} onChange={(e) => setContent(e.target.value)}/>
                <Button type='submit' variant='outline-primary'>Post</Button>
            </Form>
        </Card>
    )
}