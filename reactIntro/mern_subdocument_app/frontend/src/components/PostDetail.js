import {Card, Button, Form, InputGroup} from 'react-bootstrap'
import { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom"
import { commentCreateView, commentDeleteView, postDeleteView, postDetailView } from "../store/PostStore"
import { alertSliceActions } from '../store/AlertStore'
import { AlertComponent } from './AlertComponent'

export const PostDetail = () => {
    

    const post = useSelector(state => state.post.post)
    const dispatch = useDispatch()

    const history = useHistory()

    const {postID} = useParams()

    // Comments

    const [comment, setComment] = useState('')
    const [commenting, setCommenting] = useState(false)

    useEffect(() => {

        const loadPost = async () => {
            await dispatch(postDetailView(postID))
        }

        loadPost()
    }, [dispatch, postID])



    const postDeleteHandler = async (postID) => {

        try {
            
            await dispatch(postDeleteView(postID))

            history.push('/posts')

        } catch (error) {
            dispatch(alertSliceActions.showAlert({message:error.message, variant:'danger'}))
        }
    }

    const commentCreateHandler = async (postID) => {

        if(comment !== ''){
            try {
                
                const commentObj = {comment}

                await dispatch(commentCreateView(postID, commentObj))
                setCommenting(false)
                setComment('')
            } catch (error) {
                dispatch(alertSliceActions.showAlert({message:error.message, variant:'danger'}))
            }
        } else {
            dispatch(alertSliceActions.showAlert({message:'Comment Cannot be Blank', variant:'danger'}))
        }
    }


    const commentDeleteHandler = async (postID, commentID) => {
        try {
            
            await dispatch(commentDeleteView(postID, commentID))

        } catch (error) {
            dispatch(alertSliceActions.showAlert({message:error.message, variant:'danger'}))
        }
    }

    return(
        <Card>

            <h4>Post ID {post._id}</h4>
            <AlertComponent/>
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <td>Title</td>
                        <td>Content</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{post.title}</td>
                        <td>{post.content}</td>
                        <td><Button disabled={commenting} onClick={()=>postDeleteHandler(post._id)}>Delete</Button></td>
                        <td><Button disabled={commenting} onClick={() => setCommenting(true)}>Add Comment</Button></td>
                    </tr>
                </tbody>
            </Table>


            {/* Add Comment Form */}

            {commenting && <Form>
                <InputGroup>
                    <Form.Control 
                        type='text'
                        placeholder='Add Comment'
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}/>
                    <Button onClick={() => commentCreateHandler(post._id)}>Add Comment</Button>
                    <Button variant='info' onClick={() => setCommenting(false)}>Cancel</Button>
                </InputGroup>
            </Form>}
            
            <hr/>
            <h4>Comments</h4>
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <td>Comment ID</td>
                        <td>Comment</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {post.comments && post.comments.map(comment => {
                        return(
                            <tr key={comment._id}>
                                <td>{comment._id}</td>
                                <td>{comment.comment}</td>
                                <td><Button variant='danger' onClick={() => commentDeleteHandler(post._id, comment._id)}>Delete</Button></td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </Table>

        </Card>
    )
}