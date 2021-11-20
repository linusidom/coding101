import {Card} from 'react-bootstrap'
import { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { postListView } from '../store/PostStore'
import {Post} from './Post'

export const Posts = () => {
    
    const posts = useSelector(state => state.post.posts)

    const dispatch = useDispatch()

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const loadPost = async () => {
            await dispatch(postListView())
            setLoading(false)
        }

        loadPost()

    }, [dispatch])

    
    return !loading ? 

        posts.length > 0 ?
            posts.map(post => <Post key={post._id} post={post} />)
            :
            <Card>There are no posts as of yet!</Card>


        : 
    <Card>...Loading</Card>
}