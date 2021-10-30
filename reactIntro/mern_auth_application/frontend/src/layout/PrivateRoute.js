import {useSelector} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
export const PrivateRoute = (props) => {

    const user = useSelector(state => state.user)

    return user.authorized ? <Route path={props.path}>{props.children}</Route> : <Redirect to='/login'/>
}