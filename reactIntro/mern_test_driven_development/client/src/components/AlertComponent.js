import {useSelector, useDispatch} from 'react-redux'
import { alertSliceActions } from '../store/AlertStore';

export const AlertComponent = () => {
    
    const alert = useSelector(state => state.alert)
    
    const dispatch = useDispatch()

    if(alert.showAlert){
        setTimeout(() => {
            // console.log('before dispatch')
            dispatch(alertSliceActions.closeAlert())
            // console.log('after dispatch')
        }, 3000);
    }

    return(
       alert.showAlert && <div role='alertComponent' className={`alert alert-${alert.alertVariant}`}>{alert.alertMessage}</div>
    )
}