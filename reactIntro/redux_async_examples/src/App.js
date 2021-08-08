import { useEffect, useState } from "react";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import {useDispatch, useSelector} from 'react-redux'
import {fetchPosts, addNewPost} from './store/PostReducer'

function App() {

  // Get Posts and Post them
  // Above the Posts, make a post form


  // const [posts, setPosts] = useState([])

  const posts = useSelector(state => state.post.posts)
  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])

  function addPost(post){
    dispatch(addNewPost(post))
  }

  return (
    <div>
      <h1>Test</h1>
      <PostForm addPost={addPost}/>
      <Posts posts={posts}/>
    </div>
  );
}

export default App;
