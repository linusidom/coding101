import { Card } from "react-bootstrap"
import { useSelector } from "react-redux"

export const Profile = () => {
    
    const user = useSelector(state => state.user.user)

    return(
        <Card>
            <h3>User Profile</h3>
            <p>If I refresh all the data disappears</p>
            <h5>{user.username}</h5>
            <h5>{user.email}</h5>
            <h5>{user._id}</h5>
            <h5>{user.password}</h5>
        </Card>
    )
}