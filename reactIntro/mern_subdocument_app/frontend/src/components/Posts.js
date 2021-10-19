import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postListView } from "../store/PostStore"
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { LoadingSpinner } from "./LoadingSpinner"

export const Posts = (props) => {
    

    const [loading, setLoading] = useState(false)

    const posts = useSelector(state => state.post.posts)

    const dispatch = useDispatch()
    // Why is this empty???
    // When we refresh the UI all data from the Redux store gets reset
    // We have to have a get method if we want to make our app feel stateful


    useEffect(() => {

        const loadPost = async () => {
            setLoading(true)
            await dispatch(postListView())
            setLoading(false)
        }

        loadPost()


    }, [dispatch])

    

    return(
        !loading ? posts && posts.map(post => {
            return(
                <Card key={post._id}>
                    <Link to={`/posts/${post._id}`}><h3>{post.title}</h3></Link>
                    <p>{post.content}</p>
                </Card>
            )
        }) : <LoadingSpinner/>
    )
}