import { useEffect, useState } from 'react'
import {Card, Button, Form} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {Link, useParams} from 'react-router-dom'
import { alertSliceActions } from '../store/AlertStore'
import { commentCreateView, commentDeleteView, postDeleteView, postDetailView, postUpdateView } from '../store/PostStore'
import { AlertComponent } from './AlertComponent'
import { useNavigate } from 'react-router-dom'


export const PostDetail = () => {
    
    const {postID} = useParams()

    const user = useSelector(state => state.user.user)

    const post = useSelector(state => state.post.post)

    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {

        const postDetail = async () => {
            await dispatch(postDetailView(postID))
            setLoading(false)
        }

        postDetail()

    }, [dispatch])



    // update section
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const [updating, setUpdating] = useState(false)
    const [ updateTitle, setUpdateTitle ] = useState('')
    const [ updateContent, setUpdateContent ] = useState('')
    
    
    const updateItem = () => {
        setUpdateTitle(post.title)
        setUpdateContent(post.content)
        setButtonDisabled(true)
        setUpdating(true)
    }

    const updateCancel = () => {
        setButtonDisabled(false)
        setUpdating(false)
    }

    const postUpdateHandler = async () => {
        if(updateTitle !== '' && updateContent !== ''){
            const token = localStorage.getItem('token')
            const postObj = {title: updateTitle, content: updateContent}
            await dispatch(postUpdateView(token, postID, postObj))
            setUpdating(false)
            setButtonDisabled(false)
        } else {
            dispatch(alertSliceActions.showAlert({message:'Fields cannot be blank', variant:'danger'}))
        }
    }


    // Delete Section
    const postDeleteHandler = async () => {
        const token = localStorage.getItem('token')
        const result = await dispatch(postDeleteView(token, postID))
        if(result){
            navigate('/posts')
        }
    }

    // Comments Section
    const [ commenting, setCommenting ] = useState(false)
    const [ comment, setComment ] = useState('')

    const commentItem = () => {
        setCommenting(true)
        setButtonDisabled(true)
    }

    const commentCancel = () => {
        setCommenting(false)
        setButtonDisabled(false)
    }
 
    const commentCreateHandler = async () => {
        const token = localStorage.getItem('token')
        const commentObj = {comment}

        const result = await dispatch(commentCreateView(token, postID, commentObj))
        if(result){
            setButtonDisabled(false)
            setCommenting(false)
            setComment('')
        }
    }

    const commentDeleteHandler = async (commentID) => {
        const token = localStorage.getItem('token')

        const result = await dispatch(commentDeleteView(token, postID, commentID))
        
    }







    return (
        !loading ? <Card>
            <AlertComponent/>
            <div className="row">
                <div className="col">
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <p>Posted By: {post.username}</p>
                    <p>Created: {post.createdAt}</p>
                </div>
                <div className="col">
                    {user._id === post.user && <><Button className='me-2' size='sm' variant='outline-primary' onClick={updateItem} disabled={buttonDisabled}>Update</Button>
                    <Button className='me-2' size='sm' variant='outline-danger' onClick={postDeleteHandler}  disabled={buttonDisabled}>Delete</Button></>}
                    <Button className='me-2' size='sm' variant='outline-info' onClick={commentItem} disabled={buttonDisabled}>Add Comment</Button>
                </div>

                {updating && <div>
                    <Form>
                        
                        <Form.Control className='my-3' type='text' placeholder='Enter title' value={updateTitle} onChange={(e)=>setUpdateTitle(e.target.value)}/>
                        <Form.Control className='my-3' type='text' placeholder='Enter content' value={updateContent} onChange={(e)=>setUpdateContent(e.target.value)}/>
                        
                        <Button variant='outline-primary' onClick={postUpdateHandler}>Update</Button>
                        <Button variant='outline-secondary' type='submit' onClick={updateCancel}>Cancel</Button>
                    </Form>
                </div>}
                {commenting && <div>
                    <Form>
                        
                        <Form.Control className='my-3' type='text' placeholder='Enter comment' value={comment} onChange={(e)=>setComment(e.target.value)}/>
                        
                        <Button variant='outline-primary' onClick={commentCreateHandler}>Add Comment</Button>
                        <Button variant='outline-secondary' type='submit' onClick={commentCancel}>Cancel</Button>
                    </Form>
                </div>}
                <div>
                    <hr/>
                    <h3>Comments</h3>
                    {post.comments.length > 0 && post.comments.map(comment => {
                        return(
                            <Card>
                                <p>Comment Made by: {comment.username}</p>
                                <p>Comment: {comment.comment}</p>
                                <Button size='sm' onClick={() => commentDeleteHandler(comment._id)}>Delete Comment</Button>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </Card> : '...Loading'
    )
}