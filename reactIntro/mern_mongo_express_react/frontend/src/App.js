import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from 'react';

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    // React will not proxy default paths
    // This must have some kind of URI path
    fetch('/posts')
    .then(res => res.json())
    .then(data => setPosts(data))


  }, [])


  return (
    <div className="container">
      <h1>MERN Full Stack</h1>
      {posts.map(post => {
        return(
          <div key={post._id} className='card p-3'>
            <p>{post.title}</p>
            <p>{post.content}</p>
            <p>{post.updatedAt}</p>
            <p>{post.createdAt}</p>
          </div>

        )
      })}
    </div>
  );
}

export default App;
