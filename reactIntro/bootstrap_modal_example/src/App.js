import 'bootstrap/dist/css/bootstrap.min.css'
import { useRef, useState } from 'react';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';
import MessageModal from './components/MessageModal';


function App() {


  // Anytime we want to toggle, think useState
  const [messageModal, setMessageModal] = useState(false)

  const text = useRef()

  function onSubmitHandler(e){
    e.preventDefault()

    console.log(text.current.value.trim())

    let textInput = text.current.value.trim()
    if(textInput === '') {
      setMessageModal({
        title:'Field Required',
        message:'This field cannot be blank'
      })
    }
    else{
      setMessageModal({
        title:'You Entered',
        message: textInput
      })
    }
  }

  function handleClose(){
    setMessageModal(null)
  }


  return (
    <Container style={{marginTop:'100px'}}>
      <h1 className='text-center'>Bootstrap Modal Example</h1>
      {messageModal && <MessageModal title={messageModal.title} message={messageModal.message} handleClose={handleClose}/>}
      {/* Form */}
      <Form onSubmit={onSubmitHandler}>
        <InputGroup>
          <Form.Control type='text' placeholder='Enter Text' ref={text}/>
          <Button type='submit'>Submit</Button>
        </InputGroup>
      </Form>
    </Container>
  );
}

export default App;
