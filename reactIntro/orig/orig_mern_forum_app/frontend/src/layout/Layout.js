import { Header } from "./Header"

export const Layout = (props) => {
    return(
        <div>
            <Header/>
            <div>{props.children}</div>
        </div>
    )
}