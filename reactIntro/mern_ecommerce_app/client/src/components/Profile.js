import { Card } from "react-bootstrap"
import { useSelector } from "react-redux"

export const Profile = () => {
    
    const user = useSelector(state => state.user.user)
    
    return(
        <Card>
            <h3>Profile</h3>
            <p>{user.email}</p>
            <p>{user.username}</p>
        </Card>
    )
}