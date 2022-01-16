import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export const AdminRoute = (props) => {

    const user = useSelector(state => state.user)


    return user.authorized && user.user.username === 'admin' ? props.children : <Navigate to='/login'/>
}