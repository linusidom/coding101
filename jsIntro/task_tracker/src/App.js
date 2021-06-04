import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  const [showForm, setShowForm] = useState({})

  function toggleForm(){
    // console.log('Button To Toggle Clicked')
    console.log(showForm)
    setShowForm(!showForm)
    // console.log(showForm)
  }

  return (
    //  First Lets build the example template 
     <div className="container my-5 p-5" style={{border:'2px solid green'}}> 
    
       {/* Header  */}
     	<div className="row">
        <div className="col">
          <h1>Task Tracker</h1>
        </div>
        <div className="col text-end">
          <button className={showForm ? 'btn btn-danger' :'btn btn-info'} onClick={toggleForm}>{showForm ? 'Close' : 'Add'}</button>
        </div>
      </div> 

       {/* Form  */}

      {/* Show 
      { true && true }

      {/* Do not show */}
      {/* { false && true }  */}

       { showForm &&
       
       <form className='input-group my-5'>
          {/* You will self closing tags are most common in React */}
          <input type="text" placeholder="Enter a ToDo item" className='form-control' />
          <button className='btn btn-info'>Submit</button>
        </form>
        
        }

       {/* Item List  */}
       <div className="row">
        <div className="col"> 
           {/* Item 1  */}
           <div className="row  my-3">
            <div className="col">
              <h3>Item 1</h3>
            </div>
            <div className="col text-end">
              <button className='btn btn-danger'>Delete</button>
            </div>	
          </div> 

           {/* Item 2  */}
 		    		<div className="row  my-3">
            <div className="col">
              <h3>Item 2</h3>
            </div>
            <div className="col text-end">
              <button className='btn btn-danger'>Delete</button>
            </div>	
          </div>

          {/* Item 3  */}
          <div className="row my-3">
            <div className="col">
              <h3>Item 3</h3>
            </div>
            <div className="col text-end">
              <button className='btn btn-danger'>Delete</button>
            </div>	
          </div>

           {/* End Col Div  */}
         </div> 
         {/* End Row Div  */}
       </div> 
     </div> 
  );
}

export default App;
