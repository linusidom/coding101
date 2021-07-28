import logo from './logo.svg';
import './App.css';
import {useState, useReducer} from 'react'

// If the import from file has an export default, no need for {}
// import FuncHeader, { ConstHeader }  from './components/Header'
import Header  from './components/Header'
import { TaskForm } from './components/Form';
import { Tasks } from './components/Tasks';
// If the import file has only 'export' without default, need {}
// import {Header}  from './components/Header'


import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Alert} from 'react-bootstrap'


const initialState = {
  tasks: [],
  showAlert: false,
  alertVariant: 'warning',
  alertMessage: 'This is a message'
};

function reducer(state, action) {

  if(action.type === 'ADD_TASK'){
    const updateTask = state.tasks.concat(action.payload)
    return {...state,
      tasks:updateTask,
      showAlert: true,
      alertMessage: 'Task Added',
      alertVariant: 'success'
    }
  }
  if(action.type === 'DELETE_TASK'){
    const updateTask = state.tasks.filter( (task) => { return task.id !== action.payload})
    return {...state,
      tasks:updateTask,
      showAlert: true,
      alertMessage: 'Task Removed',
      alertVariant: 'danger'
    }
  }

  if(action.type === 'CLOSE_ALERT'){
    return{...state,
      showAlert: false
    }
  }



}


function App() {



  const [showForm, setShowForm] = useState(false)
  function toggleForm(){
    setShowForm(!showForm)
  }

  // const DUMMY_DATA = [
  //   {
  //       id: 1,
  //       text: 'Item 1'
  //   },
  //   {
  //     id: 2,
  //     text: 'Item 2'
  //   },
  //   {
  //     id: 3,
  //     text: 'This is another Item'
  //   },
  // ]

  const [state, dispatch] = useReducer(reducer, initialState);


  // We moved this to initialState above and no longer have a need for setTasks
  // const [tasks, setTasks] = useState(DUMMY_DATA)


 

  function deleteTask(taskID){
    
    dispatch({type:'DELETE_TASK', payload:taskID})
    
    
    // setTasks(tasks.filter( (task) => { return task.id !== taskID}  ))
    // showAlertMessage('danger', 'Task Removed')
    
  }

  function addTask(task){
    dispatch({type:'ADD_TASK', payload:task})

    // setTasks(prevTasks => prevTasks.concat(task))
    // showAlertMessage('success', 'Task Added')
  }


  // const [showAlert, setShowAlert] = useState(false)
  // const [alertVariant, setAlertVariant] = useState('warning')
  // const [alertMessage, setAlertMessage] = useState('This is a Message')

  // function showAlertMessage(variant, message) {
  //   // setShowAlert(true)
  //   // setAlertMessage(message)
  //   // setAlertVariant(variant)

  //   setTimeout( () => {
  //     // setShowAlert(false)
  //   }, 3000)
  // }

  function closeAlert(){
    dispatch({type:'CLOSE_ALERT'})
  }

  return (
 
    <Container className="my-5 p-5" style={{border:'2px solid green'}}>

       <Header title='Task Tracker' showForm={showForm} toggleForm={toggleForm}/>

       {state.showAlert &&  setTimeout(() => {closeAlert()}, 3000)  && <Alert variant={state.alertVariant}>{state.alertMessage}</Alert>}

       { showForm && <TaskForm addTask={addTask}/>}

       <Tasks tasks={state.tasks} deleteTask={deleteTask}/>

     </Container>
  );
}

export default App;
