import React from 'react'
import { useSelector } from 'react-redux'

export default function AlertComponent(props){
    
    const alert = useSelector(state => state.alert)
    console.log(alert)

    return(
        <div className={`alert alert-${alert.variant}`}>
            <p>Alert {alert.message}</p>
        </div>
    )
}