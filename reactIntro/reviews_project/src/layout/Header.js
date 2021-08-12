import classes from './Header.module.css'
import {Link} from 'react-router-dom'
export default function Header(){
    return(
        <div className={classes.header}>
            <h1 className={classes.logo}>Reviews</h1>
            <ul className={classes.listGroup}>
                <li className={classes.listItem}><Link to='/'>Home</Link></li>
                <li className={classes.listItem}><Link to='/create'>Create</Link></li>
            </ul>
        </div>
    )
}