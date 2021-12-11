import {Card} from 'react-bootstrap'
import {useSelector} from 'react-redux'
import { AlertComponent } from './AlertComponent'
export const Profile = () => {

    const user = useSelector(state => state.user.user)

    return(
        <Card>
            <AlertComponent/>
            Profile
            <p>{user.username}</p>
            <p>{user._id}</p>
        </Card>
    )
}