// import {useEffect, useState} from 'react'
// import {Component, useEffect, useState} from 'react'
// import { useState } from "react"


// Function
function ComponentWillUnmountFunc(props){
    
    const [showText, setShowText] = useState(true)
    
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setShowText(false)
        }, 3000)

        // Cleanup = componentWillUnMount
        return () => {
            console.log('cleanup function')
            clearTimeout(timer)
        }
    },[showText])

    return(
        <div>
            {showText && <h1>Hide this text</h1>}
            <button onClick={() => setShowText(!showText)}>Toggle</button>
        </div>
    )
}



// // Class
// class ComponentWillUnmountParentClass extends Component{

//     constructor(){
//         super()
//         this.state={
//             showChild:true
//         }
//     }

//     componentDidMount(){
//         setTimeout(()=>{
//             this.setState({
//                 showChild:false
//             })
//         }, 5000)
//     }

//     render(){
//         return(
//             <div>
//                 {this.state.showChild && <ComponentWillUnmountChildClass />}
//             </div>
//         )
//     }
// }

// class ComponentWillUnmountChildClass extends Component{
    


//     componentWillUnmount(){
//         console.log("Oh no I'm going away")
//     }
    
//     render(){
//         return(
//             <div>
//                 <h1>I am a Child Class</h1>
//             </div>
//         )
//     }
// }




// export default ComponentWillUnmountParentClass
export default ComponentWillUnmountFunc