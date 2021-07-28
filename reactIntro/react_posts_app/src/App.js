import {Switch, Route, Redirect} from 'react-router-dom'
import AllQuotes from './pages/AllQuotes'
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import MainNavigation from './layout/MainNavigation';

function App() {
  return (
    <MainNavigation>
    <Switch>
      <Route path='/' exact>
        <Redirect to='/quotes'/>
      </Route>
      <Route path='/quotes' exact>
        <AllQuotes/>
      </Route>
      <Route path='/quotes/:quoteID'>
        <QuoteDetail/>
      </Route>
      <Route path='/new-quote'>
        <NewQuote/>
      </Route>
      <Route path='*'><NotFound /></Route>
    </Switch>
    </MainNavigation>
  );
}

export default App;
