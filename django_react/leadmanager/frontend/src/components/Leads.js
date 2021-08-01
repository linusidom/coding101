import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { deleteLead, leadSliceActions, getLeads } from '../store/LeadReducer'
// import { getLeads } from '../store/LeadReducer'

export default function Leads(props){
    
    const leads = useSelector(state => state.lead.leads)
    const dispatch = useDispatch()
    
    // console.log(leads)    

    useEffect(() => {
        dispatch(getLeads())
    },[])

    // function leadDispatch(){
    //     dispatch(getLeads())
    // }

    function deleteHandler(leadID){
        dispatch(deleteLead(leadID))

    }

    return(
    <div>
        <h1>All Leads</h1>
        {/* <button onClick={leadDispatch}>Click</button> */}
        <table className='table table-striped table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th/>
                </tr>
            </thead>
            <tbody>
                {leads.map((lead) => {
                    return(
                        <tr key={lead.id}>
                            <td>{lead.id}</td>
                            <td>{lead.name}</td>
                            <td>{lead.email}</td>
                            <td>{lead.message}</td>
                            <td><button className='btn btn-danger btn-sm' onClick={() => deleteHandler(lead.id)}>Delete</button></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}