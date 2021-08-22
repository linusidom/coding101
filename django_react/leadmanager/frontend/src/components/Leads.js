import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useLocation } from 'react-router-dom'
import { deleteLead, getLeads } from '../store/LeadStore'
import AlertComponent from './AlertComponent'


const Leads = () => {

    // temp leads
    // const leads = [
    //     {
    //         id: 1,
    //         name: 'Test1',
    //         email: 'test@test.com',
    //         message: 'test'
    //     },
    //     {
    //         id: 2,
    //         name: 'Test2',
    //         email: 'test@test.com',
    //         message: 'test'
    //     },
    //     {
    //         id: 3,
    //         name: 'Test3',
    //         email: 'test@test.com',
    //         message: 'test'
    //     },
    // ]

    const leads = useSelector(state => state.lead.leads)
    const initial = useSelector(state => state.lead.initial)
    const dispatch = useDispatch()

    const token = localStorage.getItem('token')

    if(initial && token !== null){
        dispatch(getLeads(token))
    }
    
    const deleteLeadHandler = (leadID) => {
        dispatch(deleteLead(leadID, token))
    }

    const sortFunc = (leads, sortOrder) => {
        const newLeads = leads.slice().sort((a,b) => {
            if(sortOrder){
                return a.id > b.id ? 1 : -1
            }
            else{
                return a.id < b.id ? 1 : -1
            }
        })
        return newLeads
    }

    const history = useHistory()
    const location = useLocation()

    const searchParams = new URLSearchParams(location.search)
    const isSortAsc = searchParams.get('sort') === 'asc'

    const onSortHandler = () => {
        history.push('/?sort=' + (isSortAsc ? 'desc' : 'asc'))
    }


    const sortedLeads = sortFunc(leads, isSortAsc)

    return(
        <div>
            <AlertComponent/>
            <div className="row">
                <div className="col-8">
                    <h3>Leads</h3>
                </div>
                <div className="col-4 text-end">
                    <button className='btn-sm btn-info' onClick={onSortHandler}>Sort {isSortAsc ? 'Desc' : 'Asc'}</button>
                </div>
            </div>
            <table className="table table-striped table-dark">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Message</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {leads.length > 0 && sortedLeads.map(lead => {
                        return(
                            <tr key={lead.id}>
                                <td>{lead.id}</td>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.message}</td>
                                <td><button className='btn-sm btn-danger' onClick={() => deleteLeadHandler(lead.id)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Leads