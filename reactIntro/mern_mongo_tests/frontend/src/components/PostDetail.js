
import { useEffect, useState } from "react"
import { Card, Button } from "react-bootstrap"
import {Link, useHistory, useParams } from "react-router-dom"

export const PostDetail = () => {

    const history = useHistory()
    
    const {id} = useParams()

    const [post, setPost] = useState({})

    useEffect(() => {
        fetch(`/posts/${id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [id])
    

    const deleteHandler = (postID) => {
        fetch(`/posts/${postID}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => history.push('/posts'))
    }


    return(
        <Card className='p-3'>
            Post Detail
            <div className="row">
                <div className="col-8">
                    <p>{post._id}</p>
                    <p>{post.title}</p>
                </div>
                <div className="col-4">
                    <Button variant='info'>Update</Button>
                    <Button variant='danger' onClick={() => deleteHandler(post._id)}>Delete</Button>
                </div>
            </div>
            <Link to={`/createComment/${post._id}`}>Add Comment</Link>
        </Card>    
    )
}