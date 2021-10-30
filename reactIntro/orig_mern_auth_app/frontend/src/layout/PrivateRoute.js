import {Route, Redirect} from 'react-router-dom'
import { useSelector } from "react-redux"

export const PrivateRoute = (props) => {
    
    const user = useSelector(state => state.user)
    
    return user.authorized ? <Route path={props.path}>{props.children}</Route> : <Redirect to='/login'/>
}