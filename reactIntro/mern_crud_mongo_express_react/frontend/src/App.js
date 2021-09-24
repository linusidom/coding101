import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';
import {Form, InputGroup, Button, FormControl,Spinner} from 'react-bootstrap'
import {Post} from './components/Post'


function App() {

  const [title, setTitle] = useState('')

  const [posts, setPosts] = useState([{_id:1, title:'Test Post'}])

  const [disabled, setDisabled] = useState(false)

  const [loading, setLoading] = useState(false)


  // PostListView from express - Default Get View
  useEffect(() => {
    setLoading(true)
    fetch('/posts')
    .then(res => res.json())
    .then(data => {
      
      setPosts(data)
      setLoading(false)
      // console.log(data)
      
    
    })
    .catch(err => console.log(err.message))
  }, [])

  // This is our Create Handler
  const onSubmitHandler = (e) => {
    e.preventDefault()
    if(title !== ''){
      setDisabled(true)
      fetch('/posts', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body:JSON.stringify({title})
      })
      .then(res => res.json())
      .then(data => {
        setDisabled(false)  
        // console.log(data)
        setPosts(prevPosts => prevPosts.concat(data))
      })
    }
  }


  const postDeleteHandler = (postID) => {
    fetch(`/posts/${postID}`,{
      method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
      setPosts(prevPosts => prevPosts.filter(post => post._id !== postID))
    })
    .catch(err => console.log(err.message))
  }


  const updatePosts = (postObj) => {
    setPosts(prevPosts => prevPosts.map(post => post._id === postObj._id ? {...post, ...postObj} : {...post}))
  }


  return (
    <div className='container my-5 text-center'>
      <h1>React CRUD SPA (Single Page App)</h1>
      <Form onSubmit={onSubmitHandler}>
        <InputGroup>
          <FormControl type='text' placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
          <Button type='submit' disabled={disabled}>Create</Button>
        </InputGroup>
      </Form>

      {!loading ? posts.map(post => 
        <Post key={post._id} post={post} postDeleteHandler={postDeleteHandler} updatePosts={updatePosts}/>)
         : <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>}

    </div>
  );
}

export default App;
