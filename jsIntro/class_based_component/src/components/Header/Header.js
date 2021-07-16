import Button from '../UI/Button'
import classes from './Header.module.css'

export default function Header(props){
    return(
        <div className={classes.header}>
            <h1>Login Page</h1>
            {props.isLoggedIn && <Button onClick={props.logoutHandler}>Logout</Button>}
        </div>
    )
}