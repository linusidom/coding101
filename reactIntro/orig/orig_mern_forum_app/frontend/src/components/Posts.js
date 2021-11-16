import { useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { postListView } from "../store/PostStore"
import {Post} from './Post'

export const Posts = () => {

    const posts = useSelector(state => state.post.posts)

    // const [loading, setLoading] = useState(true)
    // const dispatch = useDispatch()

    // useEffect(() => {

    //     const loadPosts = async () => {
    //         await dispatch(postListView())
    //         setLoading(false)
    //     }

    //     loadPosts()

    // },[dispatch])


    return posts.length > 0 ? posts.map(post => <Post key={post._id} post={post}/>) : <Card>No Posts Yet</Card> 
}