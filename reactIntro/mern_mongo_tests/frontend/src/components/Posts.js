import { useEffect, useState } from "react"
import { Post } from "./Post"
import { useSelector, useDispatch } from "react-redux"
import { postDeleteView, postListView } from "../store/PostStore"

export const Posts = (props) => {

    // const [posts, setPosts] = useState([])

    const [loading, setLoading] = useState(false)


    const posts = useSelector(state => state.post.posts)
    const dispatch = useDispatch()
    
    useEffect(() => {
        setLoading(true)
        const loadPostFunc = async () => {
            await dispatch(postListView())
            setLoading(false)
        }

        loadPostFunc()
            
    },[dispatch])

    const deleteHandler = (postID) => {
        dispatch(postDeleteView(postID))
    }


    return !loading ? posts.map(post => <Post key={post._id} post={post} deleteHandler={deleteHandler}/>) : '...Loading'
}