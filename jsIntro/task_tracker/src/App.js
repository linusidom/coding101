import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

// If the import from file has an export default, no need for {}
// import FuncHeader, { ConstHeader }  from './components/Header'
import Header  from './components/Header'
import { TaskForm } from './components/Form';
import { Tasks } from './components/Tasks';
// If the import file has only 'export' without default, need {}
// import {Header}  from './components/Header'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Alert} from 'react-bootstrap'

function App() {

  const [showForm, setShowForm] = useState(false)


  const DUMMY_DATA = [
    {
        id: 1,
        text: 'Item 1'
    },
    {
      id: 2,
      text: 'Item 2'
    },
    {
      id: 3,
      text: 'This is another Item'
    },
  ]

  const [tasks, setTasks] = useState(DUMMY_DATA)


  function toggleForm(){
    setShowForm(!showForm)
  }

  function deleteTask(taskID){
    setTasks(tasks.filter( (task) => { return task.id !== taskID}  ))
    showAlertMessage('danger', 'Task Removed')
    
  }

  function addTask(task){
    setTasks(prevTasks => prevTasks.concat(task))
    showAlertMessage('success', 'Task Added')
  }


  const [showAlert, setShowAlert] = useState(false)
  const [alertVariant, setAlertVariant] = useState('warning')
  const [alertMessage, setAlertMessage] = useState('This is a Message')

  function showAlertMessage(variant, message) {
    setShowAlert(true)
    setAlertMessage(message)
    setAlertVariant(variant)

    setTimeout( () => {
      setShowAlert(false)
    }, 3000)
  }

  return (
 
    <Container className="my-5 p-5" style={{border:'2px solid green'}}>

       <Header title='Task Tracker' showForm={showForm} toggleForm={toggleForm}/>

       {showAlert && <Alert variant={alertVariant}>{alertMessage}</Alert>}

       { showForm && <TaskForm addTask={addTask}/>}

       <Tasks tasks={tasks} deleteTask={deleteTask}/>

     </Container>
  );
}

export default App;
