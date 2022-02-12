import { useEffect, useState } from 'react'
import { Post } from './Post'
import { Card } from "react-bootstrap"
import {useDispatch, useSelector} from 'react-redux'
import { postListView } from '../store/PostStore'

export const Posts = () => {
    
    const [loading, setLoading] = useState(true)
    
    const posts = useSelector(state => state.post.posts)


    const dispatch = useDispatch()
    useEffect(() => {
        const postList = async () => {
            
            await dispatch(postListView())
            
            setLoading(false)
        }

        postList()

    }, [dispatch])

    return(

        !loading ? 
            
            posts.length > 0 
                ? 
            posts.map(post => <Post key={post._id} post={post}/>)
                : 
            <Card role='postsComponent'>No Posts yet</Card>
        
        : <Card role='postsComponent'>...Loading</Card>
    )
}