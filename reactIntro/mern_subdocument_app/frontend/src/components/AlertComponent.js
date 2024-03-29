import { useDispatch, useSelector } from "react-redux"
import { alertSliceActions } from "../store/AlertStore"

export const AlertComponent = (props) => {
    
    const alert = useSelector(state => state.alert)

    const dispatch = useDispatch()

    // We'll add a timeout in a little bit
    if(alert.showAlert){
        setTimeout(() => {
            dispatch(alertSliceActions.closeAlert())
        }, 3000)
    }
    
    return alert.showAlert && <div className={`alert alert-${alert.alertVariant}`}>{alert.alertMessage}</div>
}