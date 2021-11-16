import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { userMemberView } from "../store/UserStore"
import {Member} from './Member'

export const Members = () => {


    const dispatch = useDispatch()
    const user = useSelector(state => state.user)

    useEffect(() => {

        const loadMembers = async () => {
            const token = localStorage.getItem('token')
            if(token){
                await dispatch(userMemberView(token))
            }
        }

        loadMembers()
    }, [dispatch])

    return(
        <div className='container'>
            <h3>Members</h3>
            {user.members.length > 0 && user.members.map(member => {
                
                return user.user._id !== member._id && <Member key={member._id} member={member}/>
            })}
        </div>
    )
    
    
}