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
import {Container} from 'react-bootstrap'

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
    // console.log('Button To Toggle Clicked')
    // console.log(showForm)
    setShowForm(!showForm)
    // console.log(showForm)
  }

  function deleteTask(taskID){
    // console.log('Delete Task', taskID)
    
    // This is Correct
    setTasks(tasks.filter( (task) => { return task.id !== taskID}  ))
    
    // This is Correct - No need for return statement if there is one conditional
    // setTasks(tasks.filter( (task) => task.id !== taskID  ))
    
  }


  function addTask(task){
    setTasks(prevTasks => prevTasks.concat(task))
  }

  // const [formData, setFormData] = useState('')
  // function onSubmitForm(e){
  //   e.preventDefault()
  //   // console.log('Form Submitted')
  //   // console.log(formData)

  //   // Random Number for ID
  //   // Math.random = 0 - 1, not inclusive, decimal float 

  //   // console.log(Math.floor(Math.random() * 100 + 4))
  //   const newTask = {
  //     id: Math.floor(Math.random() * 100) + 4,
  //     text: formData,
  //   }
  //   if(formData !== '') {
  //     addTask(newTask)
  //     setFormData('')
  //   }
    
  // }




  return (
    //  First Lets build the example template 
    //  <div className="container my-5 p-5" style={{border:'2px solid green'}}> 
    <Container className="my-5 p-5" style={{border:'2px solid green'}}>

        
       {/* Header  */}

       <Header title='Task Tracker' showForm={showForm} toggleForm={toggleForm}/>
       {/* <ConstHeader /> */}
     	{/* <div className="row">
        <div className="col">
          <h1>Task Tracker</h1>
        </div>
        <div className="col text-end">
          <button className={showForm ? 'btn btn-danger' :'btn btn-info'} onClick={toggleForm}>{showForm ? 'Close' : 'Add'}</button>
        </div>
      </div>  */}




       {/* Form  */}

      {/* Show 
      { true && true }

      {/* Do not show */}
      {/* { false && true }  */}

       { showForm && <TaskForm addTask={addTask}/>}

       {/* Item List  */}

        {/* This is our desired end result */}
       <Tasks tasks={tasks} deleteTask={deleteTask}/>


       {/* <div className="row">
        <div className="col"> 

          {
             tasks.map((task) => { 
              	return <div className="row  my-3" key={task.id}>
                  <div className="col">
                    <h3> { task.text} </h3>
                  </div>
                  <div className="col text-end">
                    <button className='btn btn-danger' onClick={ () => deleteTask(task.id)}>Delete</button>
                  </div>	
                </div>
            })
          } */}


           {/* Item 1  */}
           {/* <div className="row  my-3">
            <div className="col">
              <h3>Item 1</h3>
            </div>
            <div className="col text-end">
              <button className='btn btn-danger'>Delete</button>
            </div>	
          </div>  */}

           {/* Item 2  */}
 		    		{/* <div className="row  my-3">
            <div className="col">
              <h3>Item 2</h3>
            </div>
            <div className="col text-end">
              <button className='btn btn-danger'>Delete</button>
            </div>	
          </div> */}

          {/* Item 3  */}
          {/* <div className="row my-3">
            <div className="col">
              <h3>Item 3</h3>
            </div>
            <div className="col text-end">
              <button className='btn btn-danger'>Delete</button>
            </div>	
          </div> */}

           {/* End Col Div  */}
         {/* </div>  */}
         {/* End Row Div  */}
       {/* </div>  */}
     {/* </div>  */}
     </Container>
  );
}

export default App;
