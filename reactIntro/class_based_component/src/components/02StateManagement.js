// import { useState } from "react"


// Function
// function StateManagement(){

//     const [text, setText] = useState('This is a state example from a Function')
    
//     return(
//         <div>
//             <h1>This is a State Management Example in a Function</h1>

//             <h3>{text}</h3>
//             <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
//         </div>
//     )
// }

// const StateManagement = () => {
//     const [text, setText] = useState('This is a state example from a Const Variable')

//     return(
//         <div>
//             <h1>This is a State Management Example in a Function</h1>

//             <h3>{text}</h3>
//         </div>
//     )
// }




// // Class
import {Component} from 'react'
class StateManagement extends Component{

    // State Management in a class is initialized through Constructor

    constructor(){

        // Super is required for us to type
        super()

        // this.state is very specific and cannot be altered if you want to use state
        // state is a special word
        this.state = {
            text: 'This is a state example from a Class'
        }
    }

    // We cannot use React Hooks (useRef, useState, useEffect, useXYZ) in classes

    render()
    {
        return(
        <div>
            <h1>This is a Standard Class</h1>
            <h3>{this.state.text}</h3>
            <input type='text' value={this.state.text} onChange={(e) => this.setState({text:e.target.value})}/>
        </div>
        )      
    }
}


export default StateManagement