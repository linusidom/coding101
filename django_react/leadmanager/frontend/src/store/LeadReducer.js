import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const url = 'http://127.0.0.1:8000/api/leads/'

export const getLeads = createAsyncThunk('leads/getLeads',async () => {
    return fetch(url)
    .then(res => res.json())
})


export const deleteLead = createAsyncThunk('leads/deleteLead',async (leadID) => {
    return fetch(`${url}${leadID}`,{
        method: 'DELETE'
    })
    .then(res => leadID)

})

export const createLead = createAsyncThunk('leads/createLead',async (lead) => {
    return fetch(url,{
        method: 'POST',
        headers:{
            'Content-type':'application/json'
        },
        body: JSON.stringify(lead)
    })
    .then(res => {
        if(!res.ok){
            const err = res.json()
            // console.log('error',err)
            return Promise.reject('err')
        }
        return res.json()
    })
    // .catch(err => {
    //     // console.log('error', err)
    //     // console.dir(err.email)
    //     return err
    // })
})


const leadSlice = createSlice({
    name:'lead',
    initialState: {
        leads: [],
        status: ''
    },
    extraReducers:{
        [getLeads.pending]: (state, action) => {
            state.status='loading'
        },
        [getLeads.fulfilled]: (state, action) => {
            state.status = 'success',
            state.leads = action.payload
        },
        [getLeads.rejected]: (state, action) => {
            state.status = 'failed'
        },

        // Delete
        [deleteLead.pending]: (state, action) => {
            state.status='loading'
        },
        [deleteLead.fulfilled]: (state, action) => {
            state.status = 'success',
            state.leads = state.leads.filter((lead) => lead.id !== action.payload)
        },
        [deleteLead.rejected]: (state, action) => {
            state.status = 'failed'
        },

        // Create
        [createLead.pending]: (state, action) => {
            console.log('Create pending')
            state.status='loading'
        },
        [createLead.fulfilled]: (state, action) => {
            console.log('create fulfilled')
            console.dir(action)
            state.status = 'success',
            state.leads = state.leads.concat(action.payload)
        },
        [createLead.rejected]: (state, action) => {
            console.log('Create rejected')
            console.dir(action)
            state.status = 'failed'
        },

        // builder.addCase(getLeads.fulfilled, (state, action) => {
        //     // Add user to the state array
        //     console.log(action.payload)
        //     state.leads = action.payload
        //   })
        // builder.addCase(deleteLead.fulfilled, (state, action) => {
        //     // Add user to the state array
        //     console.log(action.payload)
        //     state.leads = state.leads.filter((lead) => lead.id !== action.payload)
        //   })
        // builder.addCase(createLead.fulfilled, (state, action) => {
        //     // Add user to the state array
        //     console.log(action.payload)
        //     state.leads = state.leads.concat(action.payload)
        //   })
    }
})


export const leadSliceActions = leadSlice.actions

export default leadSlice

