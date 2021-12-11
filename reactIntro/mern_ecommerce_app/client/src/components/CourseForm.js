import { useState } from "react"
import { Card, Form, Button, FloatingLabel } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { alertSliceActions } from "../store/AlertStore"
import { AlertComponent } from "./AlertComponent"
import { courseCreateView } from "../store/CourseStore"

export const CourseForm = () => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [file, setFile] = useState('')
    const [category, setCategory] = useState('Web')
    const [price, setPrice] = useState(0)
    
    const dispatch = useDispatch()

    const nav = useNavigate()

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        if(title !== '' && description !== '' && file !== '' && category !== '' && price !== ''){
            
            const formData = new FormData()

            formData.append('title', title)
            formData.append('description', description)
            formData.append('image', file)
            formData.append('category', category)
            formData.append('price', price)

            const token = localStorage.getItem('token')
            
            const result = await dispatch(courseCreateView(token,formData))
            if(result){
                nav('/courses')
            }

        } else {
            dispatch(alertSliceActions.showAlert({message:'All Fields must be populated', variant:'danger'}))
        }
    }

    return(
        <Card>
            <h3 className='mb-3'>Create Course</h3>
            <AlertComponent/>
            <Form onSubmit={onSubmitHandler}>
                <Form.Control className='mb-3' type='text' placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <Form.Control className='mb-3' type='text' placeholder='Enter Description' value={description} onChange={(e) => setDescription(e.target.value)}/>
                <Form.Control className='mb-3' type='file' onChange={(e) => setFile(e.target.files[0])}/>
                <FloatingLabel controlId="floatingInputGrid" label="Course Category">
                <Form.Select className='mb-3' aria-label="Floating label select example" onChange={(e) => setCategory(e.target.value)}>
                    <option disabled={true}>Course Category</option>
                    <option value="Web">Web</option>
                    <option value="Django">Django</option>
                    <option value="MERN">MERN</option>
                </Form.Select>
                </FloatingLabel>
                <Form.Control className='mb-3' type='number' min='1' max='20' placeholder='Enter Price' value={price} onChange={(e) => setPrice(e.target.value)}/>
                <Button type='submit'>Create Course</Button>
            </Form>
        </Card>
    )
}