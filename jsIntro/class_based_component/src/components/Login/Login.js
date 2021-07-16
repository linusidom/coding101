// import classes from './Login.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import Input from '../UI/Input'
import { useEffect, useState } from 'react'

export default function Login(props){

    const [email, setEmail] = useState({
        email:'',
        isValid: false
    })
    const [password, setPassword] = useState({
        password:'',
        isValid: false
    })

    const [formIsValid, setFormIsValid] = useState(false)

    const {isValid: emailIsValid} = email
    const {isValid: passwordIsValid} = password
    
    useEffect(() => {
        const timeout = setTimeout(()=> {
            console.log('validate')
            setFormIsValid(emailIsValid && passwordIsValid)
        }, 1000)

        return () => {
            console.log('timeout')
            clearTimeout(timeout)
        }
    }, [emailIsValid, passwordIsValid])

    function emailChangeHandler(e){
        setEmail({
            email: e.target.value,
            isValid: e.target.value.trim() !== '' && e.target.value.includes('@')
        })
    }

    function passwordChangeHandler(e){
        setPassword({
            password: e.target.value,
            isValid: e.target.value.length >= 6
        })
    }

    return(
        <Card>
            <Input value={email.email} onChange={emailChangeHandler}>Email: </Input>
            
            
            <Input type='password' value={password.password} onChange={passwordChangeHandler}>Password: </Input>
            
            
            <Button onClick={props.loginHandler} disabled={!formIsValid}>Login</Button>
        </Card>
    )
}