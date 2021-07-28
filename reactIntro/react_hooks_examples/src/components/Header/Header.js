import Button from '../UI/Button'
import classes from './Header.module.css'

export default function Header(props){
    return(
        <div className={classes.header}>
            <h1>This is my header</h1>
            {/* <button className={classes.logoutButton}>Logout</button> */}
            {props.isLoggedIn && <Button onClick={props.logoutHandler}>Logout</Button>}
        </div>
    )
}