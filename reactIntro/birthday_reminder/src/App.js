import Items from './components/Items'
import {Route, Switch} from 'react-router-dom'
import NotFound from "./pages/NotFound";
import Item from "./components/Item";

function App() {

  // const [items, setItems] = useState(data)


  // function clearItemsHandler(){
  //   console.log('button clicked')
  //   setItems([])
  // }

  return (
    // <Card>
    //   <h1>{items.length} Birthdays Today</h1>
    //   <Items items={items}/>
    //   <div className='clearButton'>
    //     <Button onClick={clearItemsHandler}>Clear All</Button>
    //   </div>
    // </Card>

    <>
    <Switch>
      <Route path='/' exact><Items/></Route>
      <Route path='/birthday/:birthdayID'><Item /></Route>
      {/* Error 404 Wildcard Route */}
      <Route path='*'><NotFound/></Route>
    </Switch>
    </>
    
  );
}

export default App;
