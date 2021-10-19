import {Button} from 'react-bootstrap'
export const Comment = ({comment, postID}) => {
    
    
    const deleteHandler = () => {
        fetch(`/posts/${postID}/comment/${comment._id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    
    return (
        <div>
            <p>{comment.comment}</p>
            <p>{comment._id}</p>
            <Button variant='info' size="sm">Update</Button>
            <Button variant='danger' size="sm" onClick={deleteHandler}>Delete</Button>
        </div>
    )
}