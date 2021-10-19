import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Comment } from "./Comment"

export const Post = ({post, deleteHandler}) => {


    return(
        <Card className='p-3'>
            <div className="row">
                <div className="col-8">
                    <Link to={`/post/${post._id}`}><p>{post.title}</p></Link>
                </div>
                <div className="col-4">
                    <Button variant='info'>Update</Button>
                    <Button variant='danger' onClick={() => deleteHandler(post._id)}>Delete</Button>
                </div>
            </div>
            {post.comments ? post.comments.map(comment => <Comment key={comment._id} comment={comment} postID={post._id}/>) : ''}
            
        </Card>    
    )
}