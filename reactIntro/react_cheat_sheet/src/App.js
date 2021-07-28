import {useContext, useReducer, useState} from 'react'
import AnotherComponent from './AnotherComponent'


// function App() {
//   return (
//     <div>
//       <h1>React Cheat Sheet</h1>
//     </div>
//   );
// }

// If you are familiar with Python, this is basically a Lambda Expression

// const initialState = {
//   toggleh3: true,
//   var1: true,
//   var2: 5,
//   var3: 'String'
// }

// Const Variable Method
// const reducer = (state, action) => {
//   if(action.type === 'toggle'){
//     return {
//       ...state,
//       toggleh3: !state.toggleh3
//       // var1: false,
//     }
//   }
// }

// Function method
// function reducer(state, action){

// }

const App = () => {




  // // Map - I want to apply a change to each element in the Array/List
  // const DUMMY_MAP = DUMMY_DATA.map((data) => {
  //   return <p>{data.text}</p>
  // })
  // // console.log(DUMMY_MAP)


  // // Filter - I want to get specific elements that match a particular test case
  // // Returns an Array
  // const DUMMY_FILTER = DUMMY_DATA.filter((data) => {
  //   // console.log(data)
  //   return data.id === 2
  // })
  // // console.log(DUMMY_FILTER)

  // // I want to find a specific element ( similar to get in Django/Python)
  // // returns a single Object - always the first object found
  // const DUMMY_FIND = DUMMY_DATA.find((data) => {
  //   // console.log(data)
  //   return data.id === 2
  // })

  // console.log(DUMMY_FIND)


  // const [toggleh3, setToggleH3] = useState(true)

  // Reducer Setup

  // State is what we use Below in the Return
  // Dispatch is how call the methods inside the Reducer Function
  // reducer - reducer function that holds all the ways to change our data
  // initialState - the constructor or initial data for our state
  // const [state, dispatch] = useReducer(reducer, initialState)



  return(
    <div>
      <h1>React Cheat Sheet as a Const</h1>
      {/* Returns values normally */}
      {/* {DUMMY_MAP} */}

      {/* Can't display this data directly */}
      {/* If you're familiar with Django, this is a Queryset */}
      {/* Queryset needs to go through a For loop bc it is an array */}
      {/* {DUMMY_FILTER} */}

      {/* Returns a direct Object that cannot be displayed without being parsed by map */}
      {/* {`${DUMMY_FIND.id} ${DUMMY_FIND.text}`} */}

      {/* <br/>
      {state.toggleh3 && <h3>Hide me or show me - Click the Button</h3>}
      <button onClick={() => dispatch({type:'toggle'})}>Hide Or Show the H1 Tag</button> */}

      <AnotherComponent/>


    </div>
  )
}


export default App;
