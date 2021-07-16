import {useEffect, useState} from 'react'
// import {Component} from 'react'
// import { useState } from "react"


// Function
function ComponentDidUpdateFunc(props){

    const [showText, setShowText] = useState(true)
    
    // Component did mount equivalent in Functions
    // will only run when the page is loaded for the first time
    useEffect(() => {
        console.log('Component Did Update equivalent because we have a dependency with useEffect')
    }, [showText])

    return(
        <div>
            {showText && <h1>This is Text</h1>}
            <button onClick={()=>setShowText(!showText)}>Toggle Text</button>

        </div>
    )
}



// // Class
// class ComponentDidUpdateClass extends Component{

//     constructor(){
//         super()
//         this.state = {
//             text:'This is Text',
//             showText:true
//         }
//     }

//     // will only run when every time the page rerenders
//     componentDidUpdate(){
//         console.log('This Component did Update')   
//     }

//     render()
//     {
//         return(
//         <div>
//             <h1>Component Did Update Class</h1>
//             {this.state.showText && <h3>{this.state.text}</h3>}
//             <button onClick={()=>this.setState({showText:!this.state.showText})}>Toggle Text</button>
//         </div>
//         )      
//     }
// }


// export default ComponentDidUpdateClass
export default ComponentDidUpdateFunc