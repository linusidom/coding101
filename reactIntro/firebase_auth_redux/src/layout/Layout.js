import css from './Layout.module.css'
import { Header } from "./Header"

export const Layout = (props) => {
    return(
        <div>
            <Header/>
            <div className={css.container}>{props.children}</div>
        </div>
    )
}