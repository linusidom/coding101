import {Switch, Route} from 'react-router-dom'
import Layout from './layout/Layout';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import Tours from './pages/Tours';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact><Tours/></Route>
        <Route path='/favorites' ><Favorites/></Route>

        {/* Default - Error 404 Page */}
        <Route path='*' ><NotFound/></Route>
      </Switch>
      </Layout>
  );
}

export default App;
