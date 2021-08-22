import React from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { alertSliceActions } from './AlertStore'


const url = 'http://127.0.0.1:8000/leads/api/'

export const getLeads = (token) => async (dispatch) => {
    let response = await fetch(url, {
        method: 'GET',
        headers:{
            'Content-type':'application/json',
            'Authorization': `Token ${token}`
        }
    })

    let data = await response.json()
    dispatch(leadSlice.actions.loadLeads(data))
}


export const createLead = (newLead, token) => async (dispatch) => {
    let response = await fetch(url, {
        method: 'POST',
        headers:{
            'Content-type':'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify(newLead)
    })

    let data = await response.json()
    if(data.email[0] === "lead with this email already exists."){
        dispatch(alertSliceActions.duplicateLead(data.email[0]))
    }
    else{
        dispatch(leadSlice.actions.createLead(data))
        dispatch(alertSliceActions.leadAdded("Lead Added"))
    }
}

export const deleteLead = (leadID, token) => async (dispatch) => {
    let response = await fetch(`${url}${leadID}`,{
        method:'DELETE',
        headers:{
            'Content-type':'application/json',
            'Authorization': `Token ${token}`
        },
    })
    let data = await response.json()
    dispatch(leadSlice.actions.deleteLead(leadID))
    dispatch(alertSliceActions.leadDeleted('Lead Deleted'))
}




const leadSlice = createSlice({
    name: 'lead',
    initialState:{
        leads: [],
        initial: true
    },
    reducers:{
        loadLeads(state, action){
            return{
                ...state,
                leads: action.payload,
                initial:false
            }
        },
        createLead(state, action){
            const updated = state.leads.concat(action.payload)
            return{
                ...state,
                leads: updated,
                initial:false
            }
        },
        deleteLead(state, action){
            const updated = state.leads.filter(lead => lead.id !== action.payload)
            return{
                ...state,
                leads: updated,
                initial: false
            }
        }
    }
})

export const leadSliceActions = leadSlice.actions

export default leadSlice.reducer