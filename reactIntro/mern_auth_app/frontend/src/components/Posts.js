import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { postListView } from "../store/PostStore"
import {Card} from 'react-bootstrap'
import { Spinner } from "./Spinner"


export const Posts = () => {
    
    const posts = useSelector(state => state.post.posts)

    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {

        const loadPosts = async () => {
            setLoading(true)
            await dispatch(postListView())
            setLoading(false)
        }

        loadPosts()

    },[dispatch])

    return !loading ? posts.map(post => {
    return(
        <Card key={post._id}>
            <Link to={`/posts/${post._id}`}><p>{post.title}</p></Link>
            <p>{post.content}</p>
        </Card>
        )}) 
        :   
        <Spinner/>
}