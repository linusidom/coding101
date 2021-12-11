import { Layout } from './layout/Layout';
import {Routes, Route} from 'react-router-dom'
import { Home } from './components/Home';
import { Register } from './components/Register';
import { Login } from './components/Login';
import { Profile } from './components/Profile';
import { useEffect, useState } from 'react';
import { userVerifyView } from './store/UserStore';
import {useDispatch} from 'react-redux'

function App() {


  const dispatch = useDispatch()

  const [ loading, setLoading ] = useState(true)

  useEffect(() => {

    const verifyUser = async () => {
      await dispatch(userVerifyView())
      setLoading(false)
    }

    verifyUser()
  }, [])


  return (
    <Layout>
      {/* react-router-dom has new syntax */}
      
      {/* This used to be Switch,Switch has become Routes */}

      {!loading ?
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/register' exact element={<Register/>} />
        <Route path='/login' exact element={<Login/>} />
        <Route path='/profile' exact element={<Profile/>} />
      </Routes>  : '...Loading'}


    </Layout>
  );
}

export default App;
