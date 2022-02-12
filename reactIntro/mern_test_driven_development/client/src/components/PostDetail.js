import { useEffect, useState } from "react"
import { Card, Form, Button } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import { postDeleteView, postDetailView, postUpdateView } from "../store/PostStore"
import { AlertComponent } from "./AlertComponent"
import { alertSliceActions } from "../store/AlertStore"

export const PostDetail = () => {
    
    const post = useSelector(state => state.post.post)

    const {postID} = useParams()

    const [loading, setLoading] = useState(true)

    const [titleUpdate, setTitleUpdate] = useState('')
    const [descriptionUpdate, setDescriptionUpdate] = useState('')
    const [updating, setUpdating] = useState('')
    const [buttonStatus, setButtonState] = useState('')
    
    const dispatch = useDispatch()

    const nav = useNavigate()

    useEffect(() => {
        const postDetail = async () => {
            await dispatch(postDetailView(postID))
            setLoading(false)
        }
        postDetail()
    }, [dispatch])
    

    const updateItem = () => {
        setUpdating(true)
        setButtonState(true)
        setTitleUpdate(post.title)
        setDescriptionUpdate(post.description)
    }

    const deleteHandler = async () => {
        const result = await dispatch(postDeleteView(post._id))

        if(result){

            nav('/posts')
        }
    }

    const resetHandler = () => {
        setUpdating(false)
        setButtonState(false)
        setTitleUpdate('')
        setDescriptionUpdate('')
    }
    
    const onSubmitHandler = async (e) => {
        e.preventDefault()

        if(titleUpdate !== '' && descriptionUpdate !== ''){
            const postObj = {title: titleUpdate, description: descriptionUpdate}
            const result = await dispatch(postUpdateView(post._id, postObj))
            if(result){
                resetHandler()
            }
        } else {
            dispatch(alertSliceActions.showAlert({message:'Fields must be filled in', variant:'danger'}))
        }
    }
    
    return(
        !loading ? <Card role='postDetailComponent'>
            <AlertComponent/>
            <div className="row">
                <div className="col" >
                   <p role='postTitleComponent' className='postTitleComponent'>{post.title}</p>
                </div>
                <div className="col">
                    <p role='postDescriptionComponent' className='postDescriptionComponent'>{post.description}</p>
                </div>
                {!updating ? <div className="col">
                    <Button className='updateButton' disabled={buttonStatus} role='updateButton' onClick={updateItem}>Update</Button>
                    <Button className='deleteButton' disabled={buttonStatus} role='deleteButton' onClick={deleteHandler}>Delete</Button>
                </div>
                
                :
                
                <Form onSubmit={onSubmitHandler}>
                    <Form.Control className='my-4 titleInput' type='text' role='titleInput' placeholder='Enter Title' value={titleUpdate} onChange={(e) => setTitleUpdate(e.target.value)}/>
                    <Form.Control className='my-4 descriptionInput' type='text' role='descriptionInput' placeholder='Enter Description' value={descriptionUpdate} onChange={(e) => setDescriptionUpdate(e.target.value)}/>
                    <Button role='updateItemButton'  type='submit'>Update</Button>
                    <Button role='resetButton'  onClick={resetHandler}>Clear</Button>
                </Form>
                
                
                }

            </div>


        </Card> : <Card role='postDetailComponent'>...Loading</Card>
    )}