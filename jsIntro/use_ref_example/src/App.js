import 'bootstrap/dist/css/bootstrap.min.css'
import { useRef, useState } from 'react'
import {Container, Form, FormControl, InputGroup, Button} from 'react-bootstrap'


var count = 0
function App() {

  
  // Traditional way of using forms - useState
  // Drawback - page re-renders on every input
  // Will see data right away on the page
  // High Cost, High return on the page
  // const [formData, setFormData] = useState('')

  // Another Method that is better for Forms is useRef
  // Drawback won't re-render the page to display the new data
  // Data stays in the back end
  // Low Cost
  // No return on the Page
  const formData = useRef('')

  function onSubmitHandler(e){
    e.preventDefault()
    console.log(formData.current.value)
  }

  count++
  console.log(formData, count)

  return (
    
    <Container>
      
      <h1 className='text-center my-5'>React useRef Example</h1>
      <Form onSubmit={(e) => onSubmitHandler(e)}>
        <InputGroup>
          {/* <FormControl type='text' placeholder='Enter Information' value={formData} onChange={(e) => setFormData(e.target.value)}/> */}
          <FormControl type='text' placeholder='Enter Information' ref={formData}/>
          <Button type='submit'>Submit</Button>
        </InputGroup>
      </Form>
      <h3 className='my-5 text-center'>Output: {formData.current.value}</h3>
    </Container>
  );
}

export default App;
