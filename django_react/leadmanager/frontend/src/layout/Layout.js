import React from 'react'
import Header from './Header'


const Layout = (props) => {
    return(
        <div>
            <Header/>
            <div className="container">{props.children}</div>
        </div>
    )
}

export default Layout