import css from './Header.module.css'
import {Link} from 'react-router-dom'

export const Header = () => {
    return(
        <div className={css.header}>
            <h1 className={css.logo}><Link to='/'>Auth App</Link></h1>
            <ul className={css.listGroup}>
                <li className={css.listItem}><Link to='/dashboard'>Dashboard</Link></li>
                <li className={css.listItem}><Link to='/register'>Register</Link></li>
                <li className={css.listItem}><Link to='/login'>Login</Link></li>
            </ul>
        </div>
    )
}