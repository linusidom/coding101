import {Link} from 'react-router-dom'

export default function AppNav(){
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        {/* <a href='/'>Home</a> */}
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}