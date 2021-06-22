import 'bootstrap/dist/css/bootstrap.min.css'
import {Container} from 'react-bootstrap'
import NameForm from './components/NameForm'
import Names from './components/Names';

function App() {



  return (
    <Container style={{marginTop:'100px'}}>
      <h1 className='text-center'>React useContext Example</h1>

      {/* Form for taking in Names */}
      <NameForm/>

      <Names />
    </Container>
  );
}

export default App;
