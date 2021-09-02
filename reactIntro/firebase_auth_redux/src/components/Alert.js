import { useDispatch, useSelector } from "react-redux"
import { alertSliceActions } from "../store/AlertStore"

export const Alert = () => {

    const alert = useSelector(state => state.alert)
    const dispatch = useDispatch()

    if(alert.showAlert){
        setTimeout(() => {
            dispatch(alertSliceActions.closeAlert())
        }, 3000)
    }

    return alert.showAlert && <div className={`alert ${alert.alertVariant}`}><p>{alert.alertMessage}</p></div>
}