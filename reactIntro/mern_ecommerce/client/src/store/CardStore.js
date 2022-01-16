import { alertSliceActions } from "./AlertStore"
import { userSliceActions } from "./UserStore"

export const cardCreateView = (token) => async (dispatch) => {
    let res = await fetch('/card/create', {
        method:'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(token)
    })

    let data = await res.json()

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        dispatch(userSliceActions.userLogin(data))
        return true
    }
}


export const cardDeleteView = (cardObj) => async (dispatch) => {
    let res = await fetch('/card/delete', {
        method:'PUT',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(cardObj)
    })

    let data = await res.json()

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        dispatch(userSliceActions.userLogin(data))
        return true
    }
}


export const cardChargeView = (chargeObj) => async (dispatch) => {
    let res = await fetch('/card/charge', {
        method:'POST',
        headers: {
            'Content-type' : 'application/json'
        },
        body: JSON.stringify(chargeObj)
    })

    let data = await res.json()

    if(data.error){
        dispatch(alertSliceActions.showAlert({message:data.error, variant:'danger'}))
        return false
    } else {
        dispatch(alertSliceActions.showAlert({message:'Card Charged Successfully', variant:'success'}))
        return true
    }
}