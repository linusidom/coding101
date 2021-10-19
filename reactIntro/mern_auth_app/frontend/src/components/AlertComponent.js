import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { alertSliceActions } from "../store/AlertStore"

export const AlertComponent = () => {
    
    const dispatch = useDispatch()
    const alert = useSelector(state => state.alert)
    

    if(alert.showAlert){
        setTimeout(() => {
            dispatch(alertSliceActions.closeAlert())
        }, 3000)    }

    return alert.showAlert && <div className={`alert alert-${alert.alertVariant}`}>{alert.alertMessage}</div>
}