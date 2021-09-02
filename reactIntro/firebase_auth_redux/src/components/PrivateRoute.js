import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router-dom"

export const PrivateRoute = (props) => {
    
    const user = useSelector(state => state.auth)
    console.log(user)
    
    return user.isAuthenticated ? <Route path={props.path}>{props.children}</Route> : <Redirect to='/login'/>
}