import React from 'react'
import { useDispatch } from 'react-redux'
import AlertComponent from '../components/AlertComponent'
import { userLogout } from '../store/AuthStore'


const LogoutPage = (props) => {


    const token = localStorage.getItem('token')

    const dispatch = useDispatch()
    if(token !== null){
        dispatch(userLogout(token))
    }

    return(
        <div>
          <AlertComponent/>
        </div>
    )
}

export default LogoutPage