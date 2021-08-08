import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register(props){
    
    const [registration, setRegistration] = useState({
        username: '',
        email:'',
        password:'',
        password2:''
    })
    
    function onSubmitHandler(e){
        e.preventDefault()
    }

    return(
        <div>
            <h1>Register</h1>
            <form onSubmit={onSubmitHandler}>
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" aria-describedby="username" value={registration.username} onChange={(e) => setRegistration({username:e.target.value, ...registration})}/>
                    <div id="usernameHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={registration.email} onChange={(e) => setRegistration({email:e.target.value, ...registration})}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="col-auto">
                    <label htmlFor="inputPassword6" className="col-form-label">Password</label>
                </div>
                <div className="col-auto">
                    <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" value={registration.password} onChange={(e) => setRegistration({password:e.target.value, ...registration})}/>
                </div>
                <div className="col-auto">
                    <span id="passwordHelpInline" className="form-text">
                    Must be 8-20 characters long.
                    </span>
                </div>
                <div className="col-auto">
                    <label htmlFor="inputPassword2" className="col-form-label">Confirm Password</label>
                </div>
                <div className="col-auto">
                    <input type="password2" id="inputPassword2" className="form-control" aria-describedby="passwordHelpInline" value={registration.password2} onChange={(e) => setRegistration({password2:e.target.value, ...registration})}/>
                </div>
                <div className="col-auto">
                    <span id="passwordHelpInline" className="form-text">
                    Please verify your password
                    </span>
                </div>
                <br/>
                <p>Already have an account <Link to='/login'>Login</Link></p>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div> 
    )
}