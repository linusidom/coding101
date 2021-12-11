import { useEffect, useState } from "react";

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/posts/list')
    .then(res => res.json())
    .then(data => setPosts(data))
    .catch(err => setPosts(err))
  }, [])


  return (
    <div className="App">
      <h1>Hello World</h1>
      {posts.message}
      {posts.length > 0 && posts.map(post => <p key={post._id}>{post.title}</p>)}
    </div>
  );
}

export default App;
