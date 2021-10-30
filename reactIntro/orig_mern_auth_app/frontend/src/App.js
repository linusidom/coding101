import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { LoginForm } from "./components/LoginForm";
import { PasswordChange } from "./components/PasswordChange";
import { PasswordReset } from "./components/PasswordReset";
import { PasswordResetForm } from "./components/PasswordResetForm";
import { Profile } from "./components/Profile";
import { RegisterForm } from "./components/RegisterForm";
import { Layout } from "./layout/Layout";
import { PrivateRoute } from "./layout/PrivateRoute";
import { userVerifyView } from "./store/UserStore";

function App() {

  const [loading, setLoading] = useState(true)

  const dispatch = useDispatch()

  useEffect(() => {

    const verifyUser = async () => {
      setLoading(true)
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
      {!loading ? <Switch>
        <Route path='/' exact><Home/></Route>
        <Route path='/register' exact><RegisterForm/></Route>
        <Route path='/login' exact><LoginForm/></Route>
        <Route path='/passwordChange' exact><PasswordChange/></Route>
        <Route path='/passwordReset/:token' exact><PasswordReset/></Route>
        <Route path='/passwordResetForm' exact><PasswordResetForm/></Route>
        <PrivateRoute path='/profile' exact><Profile/></PrivateRoute>
      </Switch> : '...Loading'}
    </Layout>
  );
}

export default App;
