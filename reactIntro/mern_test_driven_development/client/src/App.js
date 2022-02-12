import { Layout } from "./layout/Layout";
import {Routes, Route} from 'react-router-dom'
import {Home} from './components/Home'
import {Posts} from './components/Posts'
import {PostCreate} from './components/PostCreate'
import {PostDetail} from './components/PostDetail'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/posts' exact element={<Posts/>}/>
        <Route path='/create' exact element={<PostCreate/>}/>
        <Route path='/:postID' exact element={<PostDetail/>}/>
      </Routes>
    </Layout>
  );
}

export default App;
