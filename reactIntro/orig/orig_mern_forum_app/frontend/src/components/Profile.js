import { Card } from "react-bootstrap"
import { useSelector } from "react-redux"

export const Profile = () => {

    const posts = useSelector(state => state.post.posts)
    const user = useSelector(state => state.user.user)

    const userPosts = posts.length > 0 ? posts.filter(post => post.user === user._id) : []
    
    const comments = userPosts.length > 0 ? 
    userPosts.flatMap(post => post.comments.map(comment => comment )): []

    return(
        <Card>
        <p>Profile</p>
        <p>Posts: {userPosts.length}</p>
        <p>{comments && `Comments: ${comments.length}`}</p>
        </Card>
    )
}