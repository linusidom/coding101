import { Route, Switch } from "react-router-dom";
import Projects from "./components/Projects";
import NotFound from "./components/NotFound";
import data from './data'

function App() {

  return (
    <div className='container'>
      {/* <h1 className='title'>Basic Projects</h1> */}
      
        <Switch>
          <Route path='/' exact><Projects projects={data}/></Route>
          <Route path='*'><NotFound/></Route>
          
        </Switch>
      
    </div>
  );
}

export default App;
