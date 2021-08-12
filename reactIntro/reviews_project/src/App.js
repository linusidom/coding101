import { Route, Switch } from "react-router-dom";
import Layout from "./layout/Layout";
import CreateForm from "./pages/CreateForm";
import Reviews from "./pages/Reviews";

function App() {

  return(
    <Layout>
      <Switch>
        <Route path='/' exact><Reviews/></Route>
        <Route path='/create'><CreateForm/></Route>

      </Switch>
      

      </Layout>
  )
}

export default App;
