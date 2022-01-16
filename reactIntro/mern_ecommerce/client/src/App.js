import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { AddCard } from "./components/AddCard";
import { Cart } from "./components/Cart";
import { Checkout } from "./components/Checkout";
import { Home } from "./components/Home";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { Login } from "./components/Login";
import { Orders } from "./components/Orders";
import { ProductCreate } from "./components/ProductCreate";
import { ProductDetail } from "./components/ProductDetail";
import { Products } from "./components/Products";
import { Profile } from "./components/Profile";
import { Register } from "./components/Register";
import { AdminRoute } from "./layout/AdminRoute";
import { Layout } from "./layout/Layout";
import { PrivateRoute } from "./layout/PrivateRoute";
import { cartGetView } from "./store/CartStore";
import { productListView } from "./store/ProductStore";
import { userVerifyView } from "./store/UserStore";

function App() {


  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)

  useEffect(()=> {

    const userVerify = async () => {
      await dispatch(userVerifyView())
      await dispatch(productListView())
      await dispatch(cartGetView())
      setLoading(false)
    }

    userVerify()

  }, [dispatch])

  return (
    <Layout>

     { !loading ? 
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/register' exact element={<Register/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/products' exact element={<Products/>}/>
        <Route path='/create' exact element={<AdminRoute><ProductCreate/></AdminRoute>}/>
        <Route path='/profile' exact element={<PrivateRoute><Profile/></PrivateRoute>}/>
        <Route path='/cart' exact element={<Cart/>}/>
        <Route path='/checkout' exact element={<PrivateRoute><Checkout/></PrivateRoute>}/>
        <Route path='/addCard' exact element={<PrivateRoute><AddCard/></PrivateRoute>}/>
        <Route path='/productDetail/:productID' exact element={<ProductDetail/>}/>
        <Route path='/orders' exact element={<AdminRoute><Orders/></AdminRoute>}/>
      </Routes> : <LoadingSpinner/>}


    </Layout>
  );
}

export default App;
