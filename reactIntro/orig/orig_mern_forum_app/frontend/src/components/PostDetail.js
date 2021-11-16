import { useEffect, useState } from "react"
import { Card, Button, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router-dom"
import { alertSliceActions } from "../store/AlertStore"
import { commentCreateView, commentDeleteView, postDeleteView, postDetailView, postUpdateView } from "../store/PostStore"
import { AlertComponent } from "./AlertComponent"

export const PostDetail = () => {
    
    
    const {postID} = useParams()
    const post = useSelector(state => state.post.post)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    const user = useSelector(state => state.user.user)

    const history = useHistory()

    const token = localStorage.getItem('token')

    useEffect(() => {
        const loadPost = async () => {
            if(token){
                await dispatch(postDetailView(token, postID))
            }
            setLoading(false)
        }
        loadPost()
    }, [dispatch, postID, token])
    
    const [disableButtons, setDisableButtons] = useState(false)

    const [toggleUpdate, setToggleUpdate] = useState(false)
    const [updateTitle, setUpdateTitle] = useState('')
    const [updateContent, setUpdateContent] = useState('')

    const [toggleComment, setToggleComment] = useState(false)
    const [commentText, setCommentText] = useState('')


    const postDeleteHandler = async (postID) => {
        const result = await dispatch(postDeleteView(token, postID))
        if(result){
            history.push('/posts')
        }
    }

    const updateItem = (title, content) => {
        setDisableButtons(true)
        setToggleUpdate(true)
        setUpdateTitle(title)
        setUpdateContent(content)

    }

    const postUpdateHandler = async (e) => {
        e.preventDefault()
        if(updateTitle !== '' && updateContent !== ''){
            const commentObj = {title:updateTitle, content:updateContent}
            const result = await dispatch(postUpdateView(token, postID, commentObj))
            if(result){
                setToggleUpdate(false)
                setDisableButtons(false)
            }
        } else {
            dispatch(alertSliceActions.showAlert({message:'All fields must be filled in', variant:'danger'}))
        }

    }

    const commentItem = () => {
        setDisableButtons(true)
        setToggleComment(true)
    }

    const commentCreateHandler = async (e) => {
        e.preventDefault()
        if(commentText !== ''){

            const commentObj = {comment:commentText, user:user._id, username:user.username}
            const result = await dispatch(commentCreateView(token, postID, commentObj))
            if(result){
                setToggleComment(false)
                setDisableButtons(false)
                setCommentText('')
            }

        } else {
            dispatch(alertSliceActions.showAlert({message:'All fields must be filled in', variant:'danger'}))
        }
    }

    const commentDeleteHandler = async (commentID) => {
        dispatch(commentDeleteView(token, postID, commentID))
    }

    const commentCancelHandler = () => {
        setDisableButtons(false)
        setToggleComment(false)
    }

    const updateCancelHandler = () => {
        setDisableButtons(false)
        setToggleUpdate(false)
    }


    return(
       !loading ?        
        <Card>
            <AlertComponent/>
            {post._id ? 
            <div>
                <div className="row">
                    <div className="col-md-8">
                        <p>ID {post._id}</p>
                        <p>{post.title}</p>
                        <p>{post.content}</p>
                        <p>{post.username}</p>
                    </div>
                    <div className="col-md-4">
                        {user._id === post.user && <> <Button size='sm' variant='outline-primary' onClick={() => updateItem(post.title, post.content)} disabled={disableButtons}>Update</Button>
                        <Button size='sm' className='ms-3' variant='outline-danger' onClick={() => postDeleteHandler(post._id)} disabled={disableButtons}>Delete</Button></>}
                        <Button size='sm' className='ms-3' variant='outline-info' disabled={disableButtons} onClick={() => commentItem()}>Add Comment</Button>
                    </div>
                </div>
                {toggleUpdate && <div className="row">
                    <div className="col">
                        <Form>
                            <Form.Control className='my-3' type='text' placeholder='Enter title' value={updateTitle} onChange={(e) => setUpdateTitle(e.target.value)}/>
                            <Form.Control className='my-3' type='message' placeholder='Enter message' value={updateContent} onChange={(e) => setUpdateContent(e.target.value)}/>
                            <Button type='submit' variant='outline-primary'  onClick={() => postUpdateHandler()}>Update</Button>
                            <Button type='submit' variant='outline-warning'  onClick={updateCancelHandler}>Cancel</Button>
                        </Form>
                    </div>
                </div>}
                {toggleComment && <div className="row">
                    <div className="col">
                        <Form>
                            <Form.Control className='my-3' type='text' placeholder='Enter Comment' value={commentText} onChange={(e) => setCommentText(e.target.value)}/>
                            <Button type='submit' variant='outline-primary' onClick={commentCreateHandler}>Add Comment</Button>
                            <Button type='submit' variant='outline-warning'  onClick={commentCancelHandler}>Cancel</Button>
                        </Form>
                    </div>
                </div>}
                
                <hr/>
                <h3>Comments</h3>
                <p>comment Count{post.comments.length}</p>
                {post.comments.length > 0 && 
                post.comments.map(comment => {
                    return (
                        <Card  key={comment._id}>
                        <div className="row">
                            <div className="col">
                                <p>{comment._id}</p>
                                <p>Comment Made by: {comment.username}</p>
                                <p>Comment: {comment.comment}</p>
                            </div>
                            <div className="col">
                                {user._id === comment.user && <>
                                <Button onClick={() => commentDeleteHandler(comment._id)}>Delete</Button></>}
                            </div>
                        </div>
                        </Card>
                    )})
                }
            </div>
            : '...Post Not Found'}
        </Card>
        : '...Loading'
    )
}