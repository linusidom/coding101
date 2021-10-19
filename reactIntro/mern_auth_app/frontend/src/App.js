import 'bootstrap/dist/css/bootstrap.min.css'
import { Switch, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { Home } from './components/Home';
import { PostDetail } from './components/PostDetail';
import { PostForm } from './components/PostForm';
import { Posts } from './components/Posts';
import { Layout } from './layout/Layout';


function App() {


  return (
    <Layout>
      <Switch>
        <Route path='/dashboard' exact><Dashboard/></Route>
        <Route path='/posts' exact><Posts/></Route>
        <Route path='/create' exact><PostForm/></Route>
        <Route path='/posts/:postID' exact><PostDetail/></Route>
        <Route path='/' exact><Home/></Route>
      </Switch>
    </Layout>
  );
}

export default App;
