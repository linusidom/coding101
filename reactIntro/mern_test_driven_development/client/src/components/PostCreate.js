import { useState } from "react"
import { Card, Form, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import { postCreateView } from "../store/PostStore"
import {useDispatch}  from 'react-redux'
import { alertSliceActions } from "../store/AlertStore"
import { AlertComponent } from "./AlertComponent"

export const PostCreate = () => {
    
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const nav = useNavigate()
    const dispatch = useDispatch()

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        
        if(title !== '' && description !== ''){
            const postObj = {title, description}
        
            const result = await dispatch(postCreateView(postObj))
            
            if(result){
            
                nav('/posts')
            }
        } else {
            dispatch(alertSliceActions.showAlert({message:'All fields must be filled in', variant:'danger'}))
        }
    }
    
    return(
        <Card role='postCreateComponent'>
            <h4>Create</h4>
            <AlertComponent/>
            <Form onSubmit={onSubmitHandler}>
                <Form.Control className='my-4 titleInput' type='text' role='titleInput' placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <Form.Control className='my-4 descriptionInput' type='text' role='descriptionInput' placeholder='Enter Description' value={description} onChange={(e) => setDescription(e.target.value)}/>
                <Button role='submitButton' className='submitButton' type='submit'>Create</Button>
            </Form>
        </Card>
    )
}