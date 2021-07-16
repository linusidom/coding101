import {Component} from 'react'

// import { useState } from "react"


// Function
function PropPassingFunc(props){

    // const [text, setText] = useState('This is a state example from a Function')
    
    return(
        <div>
            <h1>This is a Prop Passing Example from a Function to a Class</h1>
            {/* <PropPassingClass text='this is text from a function'/> */}

            <h3>{props.text}</h3>
        </div>
    )
}



// // Class
class PropPassingClass extends Component{

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
            {/* this is from my current state in my constructor */}
            {/* this.state is local */}
            {/* <h3>{this.state.text}</h3> */}

            {/* this.props is from outside */}
            {/* <h3>{this.props.text}</h3> */}

            <PropPassingFunc text='This is text from a Class to a function'/>
        </div>
        )      
    }
}


export default PropPassingClass