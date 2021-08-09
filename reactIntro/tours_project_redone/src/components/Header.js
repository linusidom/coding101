import { Link } from "react-router-dom";
import classes from './Header.module.css'

export default function Header(){
    return(
        <div className={classes.header}>
            <h1 className={classes.logo}>Tours</h1>
            <ul className={classes.listGroup}>
                <li className={classes.listItem}><Link to='/'>Home</Link></li>
                <li className={classes.listItem}><Link to='/favorites'>Favorites</Link></li>
            </ul>
        </div>
    )
}