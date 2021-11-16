import {Button, Card } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { userFollowView, userUnFollowView } from "../store/UserStore"
import { AlertComponent } from "./AlertComponent"

export const Member = ({member}) => {
    
    const user = useSelector(state => state.user.user)

    const token = localStorage.getItem('token')

    const members = useSelector(state => state.user.members)
    console.log(members)

    const dispatch = useDispatch()

    const userFollowHandler = async (userID, memberID) => {
        console.log(userID, memberID)
        const followObj = {userID, memberID}
        await dispatch(userFollowView(token, followObj))
    }
    const userUnFollowHandler = async (userID, memberID) => {
        console.log(userID, memberID)
        const followObj = {userID, memberID}
        await dispatch(userUnFollowView(token, followObj))
    }

    const following = user.followers.length > 0 && user.followers.map(follower => follower.user === member._id)[0]
    console.log(following)
    
    return(
        <Card>
            <AlertComponent/>
            <div className="row">
                <div className="col-md-8"><p>{member.username} {member.email}</p></div>
                <div className="col-md-4">
                    <Button 
                    onClick={following ? () => userUnFollowHandler(user._id, member._id) : () => userFollowHandler(user._id, member._id)}>
                        {following ? 'Unfollow' : 'Follow'}
                    </Button>
                    
                </div>
            </div>
            
            
        </Card>
    )
}