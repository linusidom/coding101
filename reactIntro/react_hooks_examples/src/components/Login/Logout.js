import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './Logout.module.css'

export default function Logout(props){
    return(
        <Card>
            <h1>You have Logged in Successfully</h1>
            <Button className={classes.logoutButton} onClick={props.logoutHandler}>Logout</Button>
        </Card>
    )
}