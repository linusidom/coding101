import React from 'react'
import Leads from './Leads'
import LeadForm from './LeadForm'
import { useDispatch } from 'react-redux'
import { createLead } from '../store/LeadReducer'

export default function Dashboard(props){
    
    const dispatch = useDispatch()


    function addLead(lead){
        // console.log('lead', lead)
        dispatch(createLead(lead))
    }
    
    return(
    <div className='container'>
        <LeadForm addLead={addLead}/>
        <Leads/> 
    </div>
    )
}