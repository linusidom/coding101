import { Button } from "../UI/Button"
import { Card } from "../UI/Card"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { userLogout } from "../store/AuthStore"


export const Dashboard = () => {


    const user = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const logoutHandler = async () => {
        console.log('Logout Handler')
        await dispatch(userLogout())

    }

    return(
        <Card>
            <h3>Dashboard - This is the page accessible only after logging in</h3>
            <p className='userEmail'>{user.currentUser}</p>
            <div className='dashboardButtons'>
                <Button className='updateLink'><Link to='/update'>Update</Link></Button>
                <Button onClick={logoutHandler}>Logout</Button>
            </div>
        </Card>
    )
}