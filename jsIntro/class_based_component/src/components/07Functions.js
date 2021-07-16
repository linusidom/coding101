

// Function
// function FunctionCall(){

//     function thisIsASampleFunction(){
//         console.log('Hooray!  We called tnis Function')
//     }


//     return(
//         <div>
//             <h1>How to call function in a function</h1>
//             <button onClick={thisIsASampleFunction}>Call a Function</button>
//         </div>
//     )
// }


// Class
import {Component} from 'react'
class FunctionCall extends Component{
    // Methods go above the Render Method
    thisIsASampleFunction(){
        console.log('Hooray!  We called tnis Function')
    }
    
    

    render()
    {
        // Constants are declared below the render method
        // this.setState will not work on this variable
        const text = 'This is a const inside the render method'


        return(
        <div>
            <h1>How to call a method is a Class</h1>
            <h2>{text}</h2>
            <button onClick={this.thisIsASampleFunction.bind(this)}>Call a Method</button>
        </div>
        )      
    }
}


export default FunctionCall