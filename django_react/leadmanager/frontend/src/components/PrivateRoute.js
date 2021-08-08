import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router'
export default function PrivateRoute(props){
    console.log(props)
    const auth = useSelector(state => state.auth)
    console.log(auth)

    if(auth.isLoading){
        return(
            <h2>Loading...</h2>
        )
    }
    else if(!auth.isAuthenticated){
        return <Redirect to='/login'/>
    }
    else{
        return(
            <div>
                {props.children}
            </div>
        )
    }

    
}