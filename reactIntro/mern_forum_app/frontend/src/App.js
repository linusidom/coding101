import { Home } from "./components/Home";
import { Layout } from "./layout/Layout";
import {Routes, Route} from 'react-router-dom'
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { PrivateRoute } from "./layout/PrivateRoute";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userVerifyView } from "./store/UserStore";
import { Posts } from "./components/Posts";
import { PostCreate } from "./components/PostCreate";
import { PostDetail } from "./components/PostDetail";

function App() {


  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {


    const userVerify = async () => {
      const token = localStorage.getItem('token')
      if(token){
        await dispatch(userVerifyView(token))
       
      }
      setLoading(false)
    }

    userVerify()

  }, [dispatch])


  return (
    <Layout>
      {!loading ? <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/register' exact element={<Register/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/profile' exact element={<PrivateRoute><Profile/></PrivateRoute>}/>
        <Route path='/posts' exact element={<Posts/>}/>
        <Route path='/create' exact element={<PrivateRoute><PostCreate/></PrivateRoute>}/>
        <Route path='/postDetail/:postID' exact element={<PostDetail/>}/>
      </Routes> : '...Loading'}
    </Layout>
  );
}

export default App;
