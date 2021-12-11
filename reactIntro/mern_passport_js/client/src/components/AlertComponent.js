import {useSelector, useDispatch} from 'react-redux'
import { alertSliceActions } from '../store/AlertStore'

export const AlertComponent = () => {
    
    const alert = useSelector(state => state.alert)
    const dispatch = useDispatch()
    
    if(alert.showAlert){
        setTimeout(() => {
            dispatch(alertSliceActions.closeAlert())
        }, 5000);
    }

    return alert.showAlert && <div className={`alert alert-${alert.alertVariant}`}>{alert.alertMessage}</div>
}