import { Home } from "./components/Home";
import { Layout } from "./layout/Layout";
import {Switch, Route} from 'react-router-dom'
import { RegisterForm } from "./components/RegisterForm";
import { LoginForm } from "./components/LoginForm";
import { Profile } from "./components/Profile";
import { PrivateRoute } from "./layout/PrivateRoute";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userVerifyView } from "./store/UserStore";
import { PasswordResetRequest } from "./components/PasswordResetRequest";
import { PasswordResetForm } from "./components/PasswordResetForm";

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
      <h3>Welcome to the MERN Auth Application</h3>
      {!loading ? <Switch>
        <Route path='/' exact><Home/></Route>
        <Route path='/register' exact><RegisterForm/></Route>
        <Route path='/login' exact><LoginForm/></Route>
        <Route path='/passwordResetRequest' exact><PasswordResetRequest/></Route>
        <Route path='/passwordResetForm/:token' exact><PasswordResetForm/></Route>
        <PrivateRoute path='/profile' exact><Profile/></PrivateRoute>

      </Switch> : '...Loading'}
    </Layout>
  );
}

export default App;
