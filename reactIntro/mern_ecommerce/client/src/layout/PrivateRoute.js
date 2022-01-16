import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const PrivateRoute = (props) => {

    const authorized = useSelector(state => state.user.authorized)

    return authorized ? props.children : <Navigate to='/login'/>
}