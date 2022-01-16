import { useState } from 'react'
import {Card, Form, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { alertSliceActions } from '../store/AlertStore'
import { AlertComponent } from './AlertComponent'
import {productCreateView} from '../store/ProductStore'
import {useNavigate} from 'react-router-dom'

export const ProductCreate = () => {
    

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [image, setImage] = useState('')
    const [paidContent, setPaidContent] = useState('')

    const nav = useNavigate()

    const dispatch = useDispatch()

    const onSubmitHandler = async (e) => {
        e.preventDefault()

        if(title !== '' && description !== '' && price !== '' && image !== '' && paidContent !== ''){
            
            const formData = new FormData(e.target)


            const result = await dispatch(productCreateView(formData))
            if(result){
                nav('/products')
            }
        

        } else {
            dispatch(alertSliceActions.showAlert({message:'All Fields must be filled in', variant:'danger'}))
        }

    }
    return(
        <Card>
            <h3>Product Create</h3>
            <AlertComponent/>
            <Form onSubmit={onSubmitHandler}>
                <Form.Control className='my-3' name='title' type='text' placeholder='Pick a title' value={title} onChange={(e) => setTitle(e.target.value)} />
                <Form.Control className='my-3' name='description' type='text' placeholder='Enter your description' value={description} onChange={(e) => setDescription(e.target.value)} />
                <Form.Control className='my-3' name='price' type='number' placeholder='Enter your price' value={price} onChange={(e) => setPrice(e.target.value)} />
                <Form.Control className='my-3' name='image' type='file' placeholder='Confirm your price' onChange={(e) => setImage(e.target.files[0])} />
                <Form.Control className='my-3' name='paidContent' type='text' placeholder='THIS IS PAID CONTENT' value={paidContent} onChange={(e) => setPaidContent(e.target.value)} />
                <Button type='submit'>Product Create</Button>
            </Form>
        </Card>
    )
}