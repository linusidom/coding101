import { useState } from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { alertSliceActions } from '../store/AlertStore'
import { postCreatePDFView } from '../store/PostStore'
import {AlertComponent} from './AlertComponent'

export const PostPDFForm = () => {
    
    
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [file, setFile] = useState('')

    const dispatch = useDispatch()
    
    const onSubmitHandler = (e) => {

        e.preventDefault()
        
        if(title !== '' && content !== '' && file !== ''){
            // console.log(file)    
            // const postObj = {title, content, file}


            // console.log(postObj)


            const formData = new FormData()

            formData.append('title', title)
            formData.append('content', content)
            formData.append('file', file)
            console.log(...formData)

            dispatch(postCreatePDFView(formData))
        } else {
            dispatch(alertSliceActions.showAlert({message:'All fields should have a value', variant: 'danger'}))
        }
    }
    
    return(
        <Card>
            <h3>Upload a PDF File</h3>
            <AlertComponent/>
            <Form onSubmit={onSubmitHandler}>
                <Form.Control className='my-4' type='text' placeholder='Enter title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <Form.Control className='my-4' type='text' placeholder='Enter content' value={content} onChange={(e) => setContent(e.target.value)}/>
                <Form.Control className='my-4' type='file' onChange={(e) => setFile(e.target.files[0])}/>
                <Button type='submit' variant='outline-primary'>Submit</Button>
            </Form>


        </Card>
    )
}