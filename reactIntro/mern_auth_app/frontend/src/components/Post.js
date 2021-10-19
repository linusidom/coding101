import { useState } from "react"
import { Card, Table, Button, Form, InputGroup } from "react-bootstrap"
import {useDispatch, useSelector} from 'react-redux'
import {alertSliceActions} from '../store/AlertStore'
import { commentCreateView, postDeleteView } from "../store/PostStore"
import { AlertComponent } from "./AlertComponent"

export const Post = ({post}) => {
    

    const dispatch = useDispatch()

    const [comment, setComment] = useState('')
    const [commentToggle, setCommentToggle] = useState(false)

    const postDeleteHandler = async (postID) => {
        console.log(postID)
        try {
            const token = localStorage.getItem('user')
            await dispatch(postDeleteView(token, postID))
        } catch (error) {
            dispatch(alertSliceActions.showAlert({message:error.message, variant:'danger'}))
        }
    }


    const addCommentHandler = async (postID) => {

        
        if(comment !== ''){

            const commentObj = {comment}

            try {
                
                const token = localStorage.getItem('user')
                await dispatch(commentCreateView(token, postID, commentObj))

                setCommentToggle(false)

            } catch (error) {
                dispatch(alertSliceActions.showAlert({message:error.message,variant:'danger'}))    
            }
        } else {
            dispatch(alertSliceActions.showAlert({message:'Comment cannot be empty',variant:'danger'}))
        }
        
    }

    return (
        <Card>
            <AlertComponent/>
            <h4>Post ID  {post._id}</h4>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        {/* <td>ID</td> */}
                        <td>User</td>
                        <td>Title</td>
                        <td>Content</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                <tr className='text-center'>
                    {/* <td>{post._id}</td> */}
                    <td>{post.user} {post._id}</td>
                    <td>{post.title}</td>
                    <td>{post.content}</td>
                    <td><Button disabled={commentToggle}>Update</Button></td>
                    <td><Button disabled={commentToggle} onClick={() => postDeleteHandler(post._id)}>Delete</Button></td>
                    <td><Button disabled={commentToggle} onClick={() => setCommentToggle(true)}>Add Comment</Button></td>
                </tr>
                </tbody>
            </Table>
            {commentToggle && <Form>
                <InputGroup>
                    <Form.Control type='text' placeholder='Enter Comment' value={comment} onChange={(e) => setComment(e.target.value)}/>
                    <Button onClick={() => addCommentHandler(post._id)}>Add Comment</Button>
                    <Button onClick={() => setCommentToggle(false)}>Cancel</Button>
                </InputGroup>
            </Form>}
            <hr/>
            <h4>Comments</h4>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <td>Comment ID</td>
                        <td>Comment User</td>
                        <td>Comment</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {post.comments.map(comment => {
                        return(
                            <tr key={comment._id}>
                                <td>{comment._id}</td>
                                <td>{comment.user} {comment.username}</td>
                                <td>{comment.comment}</td>
                                <td><Button variant='danger'>Delete</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Card>
        
    )
}