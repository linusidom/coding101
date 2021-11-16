import { useSelector } from "react-redux"
import { Card } from "react-bootstrap"
export const Profile = () => {
    
    const user = useSelector(state => state.user.user)
    
    return(
        <Card>
            <h1>Profile</h1>
            <p>UserID: {user._id}</p>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
        </Card>
    )
}