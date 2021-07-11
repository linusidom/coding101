import React, { useEffect, useState} from 'react'
// import React, { Component} from 'react'

// export default class MyClassComponent extends Component{
    
//     constructor(){
//       super()
//       this.state = {
//         buttonText:'Click this to change the Text'
//       }
//     }

//     componentDidMount(){
//         console.log('Class Component Did Mount')
//     }

//     componentDidUpdate(){
//       console.log('Component Did Update', this.state.buttonText)
//     }
  
//     onClickHandler(){
//       this.setState({
//         buttonText:'Updated'
//       })
//     }
//     render(){
//     return(
//       <>
//       <h1>{this.props.title}</h1>
//       <button onClick={() => this.setState({buttonText:'Updated'})}>{this.state.buttonText}</button>
//       </>
//     )
//   }
// }

export default function MyClassComponent(props){
    
    const [buttonText, setButtonText] = useState('Click this to change the Text')

    useEffect(()=> {
        console.log('Function Component Did Update', buttonText)
    }, [buttonText])
    


    return(
      <>
      <h1>{props.title}</h1>
      <button onClick={() => setButtonText('Updated')}>{buttonText}</button>
      </>
    )
}