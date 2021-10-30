import {Card} from 'react-bootstrap'
import { useSelector } from 'react-redux'
export const Profile = () => {

    const user = useSelector(state => state.user.user)

    console.log(user)
    return(
        <Card>
            <h3>Profile</h3>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user._id}</p>
        </Card>
    )
}