import Button from '../UI/Button'
import Card from '../UI/Card'
import classes from './Logout.module.css'

export default function Logout(props){
    return(
        <Card>
            <h1 className={classes.title}>Logged In</h1>
            <Button onClick={props.logoutHandler}>Would you Like to Logout</Button>
        </Card>
    )
}