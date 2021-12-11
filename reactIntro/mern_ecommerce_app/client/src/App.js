
import { Layout } from './layout/Layout';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Courses } from './components/Courses';
import { CourseDetail } from './components/CourseDetail';
import { CourseForm } from './components/CourseForm';
import { RegisterForm } from './components/RegisterForm';
import { LoginForm } from './components/LoginForm';
import { Profile } from './components/Profile';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { userVerifyView } from './store/UserStore';
import { PrivateRoute } from './layout/PrivateRoute';
import { Cart } from './components/Cart';
import { CartList } from './components/CartList';

function App() {


  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {

    const verifyUser = async () => {
      const token = localStorage.getItem('token')
      if(token){
        await dispatch(userVerifyView(token))
      }
      setLoading(false)
    }

    verifyUser()
  }, [dispatch])

  return (
    <Layout>
      {!loading ? 
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/courses' exact element={<Courses/>}/>
        <Route path='/course/:courseID' exact element={<CourseDetail/>}/>
        <Route path='/courseCreate' exact element={<PrivateRoute><CourseForm/></PrivateRoute>}/>
        <Route path='/register' exact element={<RegisterForm/>}/>
        <Route path='/login' exact element={<LoginForm/>}/>
        <Route path='/carts' exact element={<CartList/>}/>
        <Route path='/profile' exact element={<PrivateRoute><Profile/></PrivateRoute>}/>
        <Route path='/cart' exact element={<PrivateRoute><Cart/></PrivateRoute>}/>
      </Routes> : '...Loading' }
    </Layout>
  );
}

export default App;
