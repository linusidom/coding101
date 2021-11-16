import { useSelector } from "react-redux"
import {Navigate} from 'react-router-dom'

export const PrivateRoute = (props) => {
    
    const user = useSelector(state => state.user)
    
    return user.authorized ? props.children : <Navigate to='/login'/>
}