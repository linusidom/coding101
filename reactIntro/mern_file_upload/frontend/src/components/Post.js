import {Card, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { postDeleteView } from '../store/PostStore'
import {Link} from 'react-router-dom'

export const Post = ({post}) => {
    
    const dispatch = useDispatch()

    const postDeleteHandler = () => {
        dispatch(postDeleteView(post._id))
    }
    
    
    return(
        <Card>
            {post.image && <img src={post.image} alt='sampleImage'/>}
            {post.images && post.images.length > 0 && post.images.map(image => <img src={image.image} key={image._id} alt='imageAlt' />)}
            {post.pdfFile && <Link to={post.pdfFile} target='_blank'>PDF File: {post.pdfFile}</Link>}
            <p>{post.title}</p>
            <p>{post.content}</p>
            <Button variant='outline-danger' onClick={postDeleteHandler}>Delete</Button>
        </Card>
    )
}