import { useState } from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import { alertSliceActions } from '../store/AlertStore'
import { postCreateView } from '../store/PostStore'
import { AlertComponent } from './AlertComponent'


export const PostForm = () => {
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    
    const dispatch = useDispatch()
    const history = useHistory()

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        if(title !== '' && content !== ''){
            
            const postObj = {title, content}
            
            try {
                
                const result = await dispatch(postCreateView(postObj))
                console.log(result)
                if(result){
                    history.push('/posts')
                } else {
                        
                }


            } catch (error) {
                dispatch(alertSliceActions.showAlert({message:error.message, variant:'danger'}))    
            }

        } else {
            dispatch(alertSliceActions.showAlert({message:'Please fill in all Fields', variant:'danger'}))
        }
    }

    return(
        <Card>
            <h1>Create Post</h1>
            <AlertComponent/>
            <Form onSubmit={onSubmitHandler}>
                <Form.Control type='text' placeholder='Enter title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <Form.Control type='text' placeholder='Enter content' value={content} onChange={(e) => setContent(e.target.value)}/>
                <Button type='submit'>Create Post</Button>
            </Form>
        </Card>
    )
}