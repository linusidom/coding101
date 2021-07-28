import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css'

export default function MainNavigation(props) {
    return (
        <>
        <div className={classes.header}>
            <h1 className={classes.headerTitle}>Blog Project</h1>
            <ul className={classes.listItems}>
                <li className={classes.listItem}><NavLink activeClassName={classes.active} to='/quotes'>All Quotes</NavLink></li>
                <li className={classes.listItem}><NavLink activeClassName={classes.active} to='/new-quote'>New Quote</NavLink></li>
            </ul>
        </div>
        <main className={classes.main}>{props.children}</main>

        </>
  
    );
  }
  