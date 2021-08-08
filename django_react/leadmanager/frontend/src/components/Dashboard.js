import React from 'react'
import Leads from './Leads'
import LeadForm from './LeadForm'
import { useDispatch, useSelector } from 'react-redux'
import { createLead } from '../store/LeadReducer'
import AlertComponent from './Alert'
import { alertSliceActions } from '../store/AlertReducer'

export default function Dashboard(props){
    
    const alert = useSelector(state => state.alert)
    const dispatch = useDispatch()


    function addLead(lead){
        // console.log('lead', lead)
        dispatch(createLead(lead))
    }

    function closeAlert(){
        const timeout = setTimeout(() => {
            dispatch(alertSliceActions.closeAlert())
        }, 3000)

        return () => {
            clearTimeout(timeout)
        }
    }
    
    return(
    <div className='container'>
        {alert.showAlert && closeAlert() && <AlertComponent/>}
        <LeadForm addLead={addLead}/>
        <Leads/> 
    </div>
    )
}