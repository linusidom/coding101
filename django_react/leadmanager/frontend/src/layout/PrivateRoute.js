import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userVerify } from '../store/AuthStore'
import Header from './Header'


const PrivateRoute = (props) => {

    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const token = localStorage.getItem('token')

    useEffect(() => {
        if(token !== null){
            dispatch(userVerify(token))
        }
    }, [])
        

    

    return auth.isAuthenticated ? props.children : <div><p className='alert alert-primary'>Please Login</p><Link to='/login'>Login</Link></div>
}

export default PrivateRoute