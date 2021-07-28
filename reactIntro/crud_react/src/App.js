import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useRef, useState } from 'react';
import {Container, Form, InputGroup, Button, Row, Col, Card} from 'react-bootstrap'

// CREATE

// RETRIEVE

// UPDATE

// DELETE
function App() {


  // For now we'll use useRef and later change to useState
  // const title = useRef('')

  const [title, setTitle] = useState('')

  const [posts, setPosts] = useState([])

  const [postItemID, setPostItemID] = useState(null)

  const [isEditing, setIsEditing] = useState(false)

  // Local DB
  // const url = 'http://localhost:5000/posts'

  // FireBase
  // const url = 'https://crud-react-project-demo-default-rtdb.firebaseio.com/posts'

  // Django Back End
  const url = 'http://localhost:8000'

  useEffect(() => {
    // fetch(url)
    // .then(res => res.json())
    // .then(data => setPosts(data))

    fetch(`${url}/post_list`)
    .then(res => res.json())
    .then(data => {
      
      // This is all for FireBase
      // const newPost = []

      // for (let key in data){
      //   const post = {
      //     id: key,
      //     title: data[key].title
      //   }
      //   newPost.push(post)
      //   console.log(newPost)
      // }
      // setPosts(newPost)

      // For Django
      // console.log(data)
      setPosts(data)

    })



  }, [])


  function addPost(post){
    // console.log(post)
    // fetch(url , {
    //   method: 'POST',
    //   headers:{
    //     'Content-type':'application/json'
    //   },
    //   body: JSON.stringify(post)
    // })
    // .then(res => res.json())
    // .then(data => setPosts(prevPosts => prevPosts.concat(data)))
    
    fetch(`${url}/post_create`, {
      method: 'POST',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => {
      
      // Method for FireBase
      // const postItem = {
      //   id: data.name,
      //   ...post
      // }
      // setPosts(prevPosts => prevPosts.concat(postItem))


      // Method for Django
      // console.log(data)
      setPosts(prevPosts => prevPosts.concat(data))

    })
    


  }

  function deletePost(postID) {
    console.log(postID)
    fetch(`${url}/post_destroy/${postID}`, {
      method:'DELETE'
    })
    .then(res => {
      
      console.log(res)
      return res.json()
    })
    .then(data => setPosts(prevPosts => prevPosts.filter((post) => post.id !== postID)))
    
  }

  // Step 1 get the data from the database and put it into the Form Field
  function editPost(postID){
    // console.log(postID)
    setPostItemID(postID)
    setIsEditing(true)

    fetch(`${url}/post_retrieve/${postID}`)
    .then(res => res.json())
    .then(data => setTitle(data.title))


  }

  // Step 2 update the data in the database after the change has been made
  function updatePost(post){
    // console.log(post.id)
    
    fetch(`${url}/post_update/${post.id}`,{
      method: 'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => setPosts(prevPosts => prevPosts.map((oldPost) => oldPost.id === post.id ? { ...oldPost, title:data.title} : { ...oldPost})))
  }

  function onSubmitHandler(e){
    e.preventDefault()
    
    // const postID = postItemID || new Date().getTime().toString(),

    console.log(postItemID)

    if(isEditing){
      const post = {
        id: postItemID,
        title:title
      }
      updatePost(post)
    }
    else{
      const post = {
        // id: new Date().getTime().toString(),
        title:title
      }
      addPost(post)
    }
    setTitle('')
    setIsEditing(false)
    setPostItemID(null)
    
    
  }



  

  return (
    <Container style={{margin: '100px auto 500px auto'}}>

      <h1 className='text-center'>Create, Retrieve, Update, Delete React Example</h1>

      {/* CREATE */}
      {/* FORM */}
      <Form onSubmit={onSubmitHandler}>
        <InputGroup>
          <Form.Control type='text' placeholder='Enter Post Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
          <Button type='submit' variant={isEditing ? 'info' : 'primary'}>{isEditing ? 'Update' : 'Submit'}</Button>
        </InputGroup>
      </Form>

      {/* RETRIEVE & POSTING */}
      {posts.map((post) => {
        return(
          <Card key={post.id} className='my-4 p-3 shadow'>
            <Row>
              <Col>{post.title}</Col>
              <Col xs={2}><Button variant='info' onClick={() => editPost(post.id)}>Update</Button></Col>
              <Col xs={2}><Button variant='danger' onClick={() => deletePost(post.id)}>Delete</Button></Col>
            </Row>
          </Card>
        )
      })}
    </Container>
  );
}

export default App;
