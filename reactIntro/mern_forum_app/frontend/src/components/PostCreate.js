import { useState } from "react"
import { Card, Form, Button } from "react-bootstrap"
import {useDispatch} from 'react-redux'
import {alertSliceActions} from '../store/AlertStore'
import { useNavigate } from "react-router-dom"

import {AlertComponent} from './AlertComponent'
import { postCreateView } from "../store/PostStore"
export const PostCreate = () => {
    
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if(title !== '' && content !== ''){
           
            const postObj = {content, title}
            const token = localStorage.getItem('token')
            const result = await dispatch(postCreateView(token, postObj))
            if(result){
                navigate('/posts')
            }
        } else {
            dispatch(alertSliceActions.showAlert({message:'All Fields must be filled in', variant:'danger'}))
        }
    }
    
    return(
        <div>
            
            <Card>
                <h1>PostCreate</h1>
                <AlertComponent/>
                <Form onSubmit={onSubmitHandler}>
                    
                    <Form.Control className='my-3' type='text' placeholder='Enter title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                    <Form.Control className='my-3' type='text' placeholder='Enter content' value={content} onChange={(e)=>setContent(e.target.value)}/>
                    
                    <Button variant='outline-primary' type='submit'>Make a Post</Button>
                </Form>
            </Card>
        </div>
    )
}