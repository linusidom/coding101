import React from 'react'
import { useDispatch } from 'react-redux'
import useInput from '../customhooks/inputhook'
import { createLead } from '../store/LeadStore'


const LeadForm = (props) => {

    const dispatch = useDispatch()

    const token = localStorage.getItem('token')

    // I want to use custom hooks instead of lots of useState
    // Leads
    const {
        value: lead,
        valueValid: leadValid,
        onValueChangeHandler: onLeadChangeHandler,
        onValueBlurHandler: onLeadBlurHandler,
        resetValue: resetLead
    } = useInput(item => item === '')

    // Email
    const {
        value: email,
        valueValid: emailValid,
        onValueChangeHandler: onEmailChangeHandler,
        onValueBlurHandler: onEmailBlurHandler,
        resetValue: resetEmail
    } = useInput(item => !item.includes('@'))

    // Message
    const {
        value: message,
        valueValid: messageValid,
        onValueChangeHandler: onMessageChangeHandler,
        onValueBlurHandler: onMessageBlurHandler,
        resetValue: resetMessage
    } = useInput(item => item === '')



    const onSubmitHandler = (e) => {
        e.preventDefault()
        if(!leadValid && !emailValid && !messageValid && token !== null){
            const newLead = {
                name: lead,
                email,
                message
            }
            dispatch(createLead(newLead, token))
        }
    }

    return(
        <div>
          <form onSubmit={onSubmitHandler}>
            
            <div className="mb-3">
                <label htmlFor="lead" className="form-label">Lead Name</label>
                <input type="text" className="form-control" id="lead" placeholder="Lead Name" value={lead} onChange={onLeadChangeHandler} onBlur={onLeadBlurHandler}/>
                {leadValid && <p>Lead Name cannot be blank</p>}
            </div>

            
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="name@example.com"  value={email} onChange={onEmailChangeHandler} onBlur={onEmailBlurHandler}/>
                {emailValid && <p>Lead Email cannot be blank</p>}
            </div>
            
            
            
            <div className="mb-3">
                <label htmlFor="message" className="form-label">Example textarea</label>
                <textarea className="form-control" id="message" rows="3"  value={message} onChange={onMessageChangeHandler} onBlur={onMessageBlurHandler}></textarea>
                {messageValid && <p>Message cannot be blank</p>}
            </div>
            <button className='btn btn-primary' type='submit'>Add Lead</button>
          </form>
        </div>
    )
}

export default LeadForm