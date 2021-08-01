import React from 'react'
import { useDispatch } from 'react-redux'

export default function AlertComponent(props){
    
    const dispatch = useDispatch()
    
    return(
        <div className={`alert ${state.alertVariant}`}>
            {state.alertMessage}
        </div>
    )
}