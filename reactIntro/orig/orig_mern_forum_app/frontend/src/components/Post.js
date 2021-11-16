import { Card } from "react-bootstrap"
import {Link} from 'react-router-dom'

export const Post = ({post}) => {
    return(
        <Card>
            <Link to={`/post/${post._id}`}>
            <p>{post._id}</p>
            <p>{post.title}</p>
            <p>{post.content}</p>
            </Link>
        </Card>
    )
}