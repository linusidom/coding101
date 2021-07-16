import {useEffect, useState} from 'react'
// import {Component} from 'react'
// import { useState } from "react"


// Function
function ComponentDidMountFunc(props){

    const [showText, setShowText] = useState(true)
    
    // Component did mount equivalent in Functions
    // will only run when the page is loaded for the first time
    useEffect(() => {
        console.log('Component Did mount equivalent is useEffect')
    }, [])

    return(
        <div>
            {showText && <h1>This is Text</h1>}
            <button onClick={()=>setShowText(!showText)}>Toggle Text</button>

        </div>
    )
}



// // Class
// class ComponentDidMountClass extends Component{

//     constructor(){
//         super()
//         this.state = {
//             text:'This is Text',
//             showText:true
//         }
//     }

        // will only run when the page is loaded for the first time
//     componentDidMount(){
//         console.log('This Component did load')   
//     }

//     render()
//     {
//         return(
//         <div>
//             <h1>Component Did Mount Class</h1>
//             {this.state.showText && <h3>{this.state.text}</h3>}
//             <button onClick={()=>this.setState({showText:!this.state.showText})}>Toggle Text</button>
//         </div>
//         )      
//     }
// }


// export default ComponentDidMountClass
export default ComponentDidMountFunc