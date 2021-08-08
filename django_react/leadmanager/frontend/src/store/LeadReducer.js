import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { alertSliceActions } from './AlertReducer'

const url = 'http://127.0.0.1:8000/api/leads/'

export const getLeads = () => async (dispatch) => {
    await fetch(url)
    .then(res => {
        
        if(!res.ok){
            dispatch(alertSliceActions.notLoggedIn('You must be logged in to request data'))
            return []
        }
        return res.json()
    })
    .then(data => dispatch(leadSlice.actions.getLeads(data)))
    .catch(err => console.log(err.message))
}


export const deleteLead = (leadID) => async (dispatch) => {
    await fetch(`${url}${leadID}`,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => {
        dispatch(alertSliceActions.deleted('Item Deleted Successfully'))
        dispatch(leadSlice.actions.deleteLead(data.id))
    })

}

export const createLead = (lead) => async (dispatch) => {
    await fetch(url,{
        method: 'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(lead)
    })
    .then(res => {
        
        // if(!res.ok){
        //     console.log(res.statusText)
        //     throw new Error('Response had an issue', res)
        // }

        return res.json()
    
    })
    .then(data => {
        if(Array.isArray(data.email)){
            dispatch(alertSliceActions.emailTaken(data.email[0]))
        }
        else{
            dispatch(leadSlice.actions.createLead(data))
            dispatch(alertSliceActions.created('Item Created Successfully'))
        }
    })
    .catch(err => console.dir(err))
}


const leadSlice = createSlice({
    name:'lead',
    initialState: {
        leads: [],
        status: ''
    },
    reducers:{
        getLeads(state, action){
            state.status = 'success',
            state.leads = action.payload
        },
        deleteLead(state, action){
            state.status = 'success',
            state.leads = state.leads.filter((lead) => lead.id !== action.payload)
        },
        createLead(state, action){
            state.status = 'success',
            state.leads = state.leads.concat(action.payload)
        }
    }
})


export const leadSliceActions = leadSlice.actions

export default leadSlice.reducer

