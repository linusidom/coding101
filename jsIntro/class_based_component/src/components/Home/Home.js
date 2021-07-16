import Header from "../Header/Header"
import Login from "../Login/Login"
import Logout from "../Login/Logout"
import {useEffect, useState} from 'react'

export default function Home(){

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('isLoggedIn') === '1'){
            setIsLoggedIn(true)
        }
    },[])

    function loginHandler(){
        localStorage.setItem('isLoggedIn', '1')
        setIsLoggedIn(true)
    }

    function logoutHandler(){
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false)
    }

    return(
        <>
        <Header isLoggedIn={isLoggedIn} logoutHandler={logoutHandler}/>
        {!isLoggedIn && <Login loginHandler={loginHandler}/>}
        {isLoggedIn && <Logout logoutHandler={logoutHandler}/>}
        </>
    )
}