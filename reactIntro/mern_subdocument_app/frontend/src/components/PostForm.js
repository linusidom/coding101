import { useState } from "react"
import { Card, Form, Button } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { alertSliceActions } from "../store/AlertStore"
import { postCreateView } from "../store/PostStore"
import { AlertComponent } from "./AlertComponent"

export const PostForm = (props) => {
    
    const [ title, setTitle ] = useState('')
    const [ content, setContent ] = useState('')
    
    const dispatch = useDispatch()

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        if(title !== '' && content !== ''){
            const postObj = {title, content}
            
            try {
                await dispatch(postCreateView(postObj))
            } catch (error) {
                dispatch(alertSliceActions.showAlert({message:error.message, variant:'danger'}))    
            }
           

        } else {
            // Show an Error - We'll use the REDUX store for this...
            dispatch(alertSliceActions.showAlert({message:'Please Fill in all fields', variant:'danger'}))
        }
    }



    return(
        <Card>
            <h4>Create a Post</h4>
            <AlertComponent/>
            <Form onSubmit={onSubmitHandler}>
                <Form.Control
                    className='my-3'
                    type='text' 
                    placeholder='Enter Post Title' 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>
                <Form.Control
                    className='my-3'
                    type='text' 
                    placeholder='Enter Post Content' 
                    value={content}
                    onChange={(e) => setContent(e.target.value)}/>
                <Button className='my-3' type='submit'>Add Post</Button>
            </Form>
        </Card>
    )
}