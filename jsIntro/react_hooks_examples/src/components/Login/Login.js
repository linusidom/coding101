import { useEffect, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import InputElement from "../UI/InputElement";
import classes from './Login.module.css'
import React from "react";


export default function Login(props){

    // const email = useRef()
    // const password = useRef()

    // forwardRef Example - DO NOT CODE ALONG HERE
    // THIS IS JUST AN EXAMPLE
    // const email = React.createRef()
    // const password = React.createRef()

    // Passive Validation Method - works but not that great
    // function validation(){
    //     console.log(email.current.value)
    //     console.log(password.current.value)

    //     if(email.current.value.trim() !== '' && email.current.value.includes('@') && password.current.value.length > 6){
    //         props.loginHandler()
    //     } 
    // }






    // Better Validation from checking with useState
    const [email, setEmail] = useState({
        email:'',
        isValid: false
    })

    const [password, setPassword] = useState({
        password:'',
        isValid: false
    })

    const [loginDisabled, setLoginDisabled] = useState(true)

    const {isValid: emailIsValid} = email
    const {isValid: passwordIsValid} = password

    useEffect(() => {
        console.log('useEffect is running')
        if(emailIsValid && passwordIsValid){
            // No need to add functions into the Dependency array because React will remember function
            // Only need to add variable into dependency array
            setLoginDisabled(false)
        }
        else{
            setLoginDisabled(true)
        }
    }, [emailIsValid, passwordIsValid])


    function validation(){
        // console.log(email)
        // console.log(password)

        if(email.isValid && password.isValid){
            props.loginHandler()
        } 
    }

    function emailChangeHandler(event){
        // console.log('email change Handler', event.target.value)
        // If we want to update the field we have to set The State of the field
        setEmail({
            email: event.target.value,
            isValid: event.target.value.trim() !== '' && event.target.value.includes('@')
        })

        // This is valid and will work, but it's not great - maybe we use useEffect??
        // if(email.isValid && password.isValid){
        //     setLoginDisabled(false)
        // }
    }

    function passwordChangeHandler(event){
        // console.log('password change handler')
        setPassword({
            password: event.target.value,
            isValid: event.target.value.length >= 6
        })

        // This is valid and will work, but it's not great - maybe we use useEffect??
        // if(email.isValid && password.isValid){
        //     setLoginDisabled(false)
        // }
    }

    // console.log(email, password)
    return(
        <Card>
            {/* Email */}
            {/* <div>
                <label htmlFor='email'>Email:</label>
                <input id='email' type='text'/>
            </div> */}

            <InputElement id='email' value={email.email} onChange={(event) => emailChangeHandler(event)}>Email: </InputElement>

            {/* Password */}
            {/* <div>
                <label htmlFor='password'>Password:</label>
                <input id='password' type='password'/>
            </div> */}

            <InputElement id='password' type='password' value={password.password} onChange={(event) => passwordChangeHandler(event)}>Password: </InputElement>

            {/* Login Button */}
            <Button className={classes.loginButton} onClick={validation} disabled={loginDisabled}>Login</Button>
        </Card>

        
    )
}