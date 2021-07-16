import classes from './InputElement.module.css'
// import React from 'react'

export default function InputElement(props){
    return(
        // <div>
        //     <label htmlFor='email'>Email:</label>
        //     <input id='email' type='text'/>
        // </div>
        <div className={classes.inputFields}>
            <label className={classes.labelField} htmlFor={props.id}>{props.children}</label>
            <input className={classes.inputElement} id={props.id} type={props.type || 'text'} value={props.value} onChange={props.onChange}/>
        </div>
    )
}

// const ELEMENT = React.forwardRef((props, ref) => {})

// const InputElement = React.forwardRef((props, ref) => {
//     return(
//         // <div>
//         //     <label htmlFor='email'>Email:</label>
//         //     <input id='email' type='text'/>
//         // </div>
//         <div className={classes.inputFields}>
//             <label className={classes.labelField} htmlFor={props.id}>{props.children}</label>
//             <input className={classes.inputElement} id={props.id} type={props.type || 'text'} ref={ref}/>
//         </div>
//     )
// })

// export default InputElement