import React from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Header(props){
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">Lead Manager</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link className="nav-link" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='/login'>Login</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='/register'>Register</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='/logout'>Logout</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav> 
    )
}