import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes} from 'react-router-dom'
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Restaurants } from './components/Restaurants';
import { Layout } from './layout/Layout';
import {useSelector, useDispatch} from 'react-redux'
import { useEffect, useState } from 'react';
import { restaurantListView } from './store/RestaurantStore';
import { RestaurantDetail } from './components/RestaurantDetail';

function App() {

  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const restaurantList = async () => {
        await dispatch(restaurantListView())
        setLoading(false)
    }

    restaurantList()

  },[dispatch])


  return (
    <Layout>
      
      {!loading ? <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/restaurants' exact element={<Restaurants/>}/>
        <Route path='/detail/:id' exact element={<RestaurantDetail/>}/>
      </Routes> : <div className="card">...Loading</div> }
    </Layout>
  );
}

export default App;
