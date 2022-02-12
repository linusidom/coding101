import { Header } from "./Header"

export const Layout = (props) => {

    if(!props.children){
        return null
    }

    return(
        <div className='layoutComponent' role='layoutComponent'>
            <Header/>
            <div className="container" role='container'>{props.children}</div>
        </div>
    )
}