import { useState } from "react"
import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginUser } from "../store/AuthReducer"

export default function Login(props){

    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    function onSubmitHandler(e){
        e.preventDefault()
        dispatch(loginUser(username, password))
    } 
    return (
    <div>
        <h1>Login</h1>
        <form onSubmit={onSubmitHandler}>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" aria-describedby="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <div id="usernameHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="col-auto">
                <label htmlFor="inputPassword6" className="col-form-label">Password</label>
            </div>
            <div className="col-auto">
                <input type="password" id="inputPassword6" className="form-control" aria-describedby="passwordHelpInline" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <br/>
            <p>Don't have an account <Link to='/register'>Register</Link></p>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    )
}