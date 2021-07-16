import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Logout from "../Login/Logout";

export default function Home(props){

    // First Hook and most common is useState
    // First element is the variable used in our project
    // Second element is the method to update the variable
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    // Doing it this way will cause an infinite Loop!!!  Not good!!
    // function loginCheck(){
    //     if(localStorage.getItem('isLoggedIn') === '1'){
    //         // Every time a useState Hook is called
    //         // THE ENTIRE PAGE WILL RE_RENDER AND RE_RUN!!!
    //         setIsLoggedIn(true)    
    //     }
    // }
    // loginCheck()

    // to prevent infinite loops and just check based on a condition
    // useEffect is the correct hook to use

    useEffect(() => {
        if(localStorage.getItem('isLoggedIn') === '1'){         
            setIsLoggedIn(true)    
        }
    }, [])


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