import React from 'react'
import { useRef } from 'react'

export default function LeadForm(props){
    
    const name = useRef()
    const email = useRef()
    const message = useRef()
    
    function onSubmitHandler(e){
        e.preventDefault()
        if(name.current.value !== '' && email.current.value.includes('@') && message.current.value !== ''){
            
            const newLead = {
                name:name.current.value,
                email:email.current.value,
                message:message.current.value
            }
            
            props.addLead(newLead)

            name.current.value = 'asdf'
            email.current.value = 'asdf@aol.com'
            message.current.value = 'asdf'
        }
    }


    return(
    <div>
        <h1>Add Lead Form</h1>
        <form onSubmit={onSubmitHandler}>
            <input className='form-control' type='text' ref={name} placeholder='Name'/>
            <input className='form-control' type='email' ref={email} placeholder='Email'/>
            <textarea className='form-control' cols='70' rows='3' ref={message} placeholder='Message'></textarea>
            <button className='btn btn-info' type='submit'>Submit</button>
        </form>
    </div>
    )
}