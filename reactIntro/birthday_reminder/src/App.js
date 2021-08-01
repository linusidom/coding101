import {Switch, Route} from 'react-router-dom'
import Items from './components/Items';
import Item from './components/Item'
import NotFound from './pages/NotFound';

function App() {
  return (
    <Switch>
      <Route path='/' exact><Items/></Route>
      <Route path='/birthday/:birthdayID'><Item/></Route>
      <Route path ='*'><NotFound/></Route>
    </Switch>
    
    
  );
}

export default App;
