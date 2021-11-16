import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Switch,Route } from "react-router-dom";
import { CommentForm } from "./components/CommentForm";
import { Home } from "./components/Home";
import { LoginForm } from "./components/LoginForm";
import { Members } from "./components/Members";
import { PasswordChangeForm } from "./components/PasswordChangeForm";
import { PasswordResetForm } from "./components/PasswordResetForm";
import { PasswordResetRequest } from "./components/PasswordResetRequest";
import { PostDetail } from "./components/PostDetail";
import { PostForm } from "./components/PostForm";
import { Posts } from "./components/Posts";
import { Profile } from "./components/Profile";
import { RegisterForm } from "./components/RegisterForm";
import { Layout } from "./layout/Layout";
import { PrivateRoute } from "./layout/PrivateRoute";
import { postListView } from "./store/PostStore";
import { userVerifyView } from "./store/UserStore";

function App() {


  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {


    const verifyUser = async () => {
      const token = localStorage.getItem('token')
      if(token){
        await dispatch(userVerifyView(token))
        dispatch(postListView())
      }
      setLoading(false)
    }

    verifyUser()
  }, [dispatch])

  return (
    <Layout>

      {!loading ? 
      <Switch>
        <Route path='/' exact><Home/></Route>

        <Route path='/login' exact><LoginForm/></Route>
        <Route path='/register' exact><RegisterForm/></Route>
        <Route path='/passwordResetRequest' exact><PasswordResetRequest/></Route>
        <Route path='/passwordResetForm/:token' exact><PasswordResetForm/></Route>
        <PrivateRoute path='/passwordChangeForm' exact><PasswordChangeForm/></PrivateRoute>
        <PrivateRoute path='/profile' exact><Profile/></PrivateRoute>
        <PrivateRoute path='/members' exact><Members/></PrivateRoute>
                
        <Route path='/posts' exact><Posts/></Route>
        <PrivateRoute path='/post/:postID' exact><PostDetail/></PrivateRoute>
        <PrivateRoute path='/postCreate' exact><PostForm/></PrivateRoute>
        <PrivateRoute path='/commentCreate' exact><CommentForm/></PrivateRoute>
      </Switch> : '...Loading'}
    </Layout>
  );
}

export default App;
