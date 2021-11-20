import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { PostMultipleForm } from "./components/PostMultipleForm";
import { PostOneForm } from "./components/PostOneForm";
import { PostPDFForm } from "./components/PostPDFForm";
import { Posts } from "./components/Posts";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/posts' exact element={<Posts/>}/>
          <Route path='/postOne' exact element={<PostOneForm/>}/>
          <Route path='/postMultiple' exact element={<PostMultipleForm/>}/>
          <Route path='/postPDF' exact element={<PostPDFForm/>}/>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
