import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'


import { Home } from './components/Home'
import { Login } from './components/Login';
import { Posts } from './components/Posts';
import { Register } from './components/Register';
import { Layout } from './layout/Layout'
import {Switch, Route} from 'react-router-dom'
import { Profile } from './components/Profile';
import { CreatePost } from './components/CreatePost';
import { PostDetail } from './components/PostDetail';
import { CreateComment } from './components/CreateComment';
function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact><Home/></Route>
          <Route path='/login' exact><Login/></Route>
          <Route path='/register' exact><Register/></Route>
          <Route path='/posts' exact><Posts/></Route>
          <Route path='/profile' exact><Profile/></Route>
          <Route path='/create' exact><CreatePost/></Route>
          <Route path='/createComment/:id' exact><CreateComment/></Route>
          <Route path='/post/:id' exact><PostDetail/></Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
