import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export const Post = ({post}) => {
    
    
    return (
        <Card>
            <div className="row">
                <div className="col">
                    <Link to={`/postDetail/${post._id}`}><h3>{post.title}</h3></Link>
                    <p>{post.content}</p>
                </div>
                
            </div>
        </Card>
    )
}