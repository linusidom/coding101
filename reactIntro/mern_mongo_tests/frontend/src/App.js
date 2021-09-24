import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  const [product, setProduct] = useState('')
  const [total, setTotal] = useState('')
  const [customer, setCustomer] = useState('')

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('/products')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])

  const deleteHandler = (postID) => {
    fetch(`/products/${postID}`,{
      method:'DELETE'
    })
    .then(res => res.json())
    .then(data => setPosts(prevPosts => prevPosts.filter(post => post._id !== postID)))
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if(product !== '' && total !== '' && customer !== ''){
      fetch('/products', {
        method: "POST",
        headers: {
          'Content-type':'application/json'
        },
        body: JSON.stringify({product, total, customer})
      })
      .then(res => res.json())
      .then(data => setPosts(prevPosts => prevPosts.concat(data)))
    }
  }

  return (
    <div className='container'>
      <form onSubmit={onSubmitHandler} className='form-group mt-5'>
        <input className='form-control' type='text' placeholder='Enter Data' value={product} onChange={(e) => setProduct(e.target.value)}/>
        <input className='form-control' type='text' placeholder='Enter Total' value={total} onChange={(e) => setTotal(e.target.value)}/>
        <input className='form-control' type='text' placeholder='Enter customer' value={customer} onChange={(e) => setCustomer(e.target.value)}/>
        <button className='btn btn-info' type='submit'>Submit</button>
      </form>
      <div className="row">
      
        {posts.map(post => {
          return(
            <div className="col-3">
              <div key={post._id} className='card p-3 my-2 shadow'>
                <div className="row">
                  <div className="col-8">
                    <p>{post._id}</p>
                    <p>{post.product}</p>
                    <p>{post.total}</p>
                    <p>{post.customer}</p>
                  </div>
                  <div className="col-4">
                    <button className='btn btn-danger' onClick={() => deleteHandler(post._id)}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
